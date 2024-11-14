export class AppUtils {
  static NavigateToNewWindow(link: string) {
    window.open(link, "_blank");
  }

  // data em YYYY-MM-DD
  private static formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  static getYesterdayDate(): string {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);
    return this.formatDate(yesterday);
  }

  static getTomorrowDate(): string {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    return this.formatDate(tomorrow);
  }

  static getTodayDate() {
    return this.formatDate(new Date());
  }
}
