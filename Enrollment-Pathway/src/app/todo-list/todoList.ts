/* Defines the TodoList entity */
export interface ITodoListComponent {
  id: number;
  title: string;
  description: string;
  link: string;
  displayAfter: Date;
  displayUntil: Date;
  severityId: number;
  campusId: number;
  campusCode: string;
  campusName: string;
  severityLevel: string;
  eventDate: Date;
}

