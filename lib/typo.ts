/* French punctuation takes a no-break space before ? ! : ; » and after «, so a
   narrow column never strands the mark at the start of a line. */
export function frenchSpacing(text: string): string {
  return text.replace(/ ([?!:;»])/g, " $1").replace(/« /g, "« ");
}
