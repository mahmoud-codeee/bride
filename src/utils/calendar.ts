import { WEDDING_DATE_ISO } from "../data/content";

/**
 * Estimated event duration used only to compute an end time for calendar
 * exports (ICS / Google Calendar require one, though none is published
 * to guests). This is an estimate and may be adjusted later.
 */
const ESTIMATED_DURATION_MS = 3 * 60 * 60 * 1000;

export const EVENT_START = new Date(WEDDING_DATE_ISO);
export const EVENT_END = new Date(EVENT_START.getTime() + ESTIMATED_DURATION_MS);

function toUtcStamp(date: Date): string {
  return date.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
}

function escapeIcsText(value: string): string {
  return value
    .replace(/\\/g, "\\\\")
    .replace(/;/g, "\\;")
    .replace(/,/g, "\\,")
    .replace(/\n/g, "\\n");
}

interface CalendarEvent {
  title: string;
  description: string;
  location: string;
}

export function buildIcsContent({ title, description, location }: CalendarEvent): string {
  const dtstamp = toUtcStamp(new Date());
  const uid = `wedding-${EVENT_START.getTime()}@mahmoud-codeee.github.io`;

  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Mohamed & Ghada Wedding//Invitation//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `UID:${uid}`,
    `DTSTAMP:${dtstamp}`,
    `DTSTART:${toUtcStamp(EVENT_START)}`,
    `DTEND:${toUtcStamp(EVENT_END)}`,
    `SUMMARY:${escapeIcsText(title)}`,
    `DESCRIPTION:${escapeIcsText(description)}`,
    `LOCATION:${escapeIcsText(location)}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ];

  return lines.join("\r\n");
}

export function downloadIcsFile(filename: string, content: string): void {
  const blob = new Blob([content], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

export function buildGoogleCalendarUrl({ title, description, location }: CalendarEvent): string {
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: title,
    dates: `${toUtcStamp(EVENT_START)}/${toUtcStamp(EVENT_END)}`,
    details: description,
    location,
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}
