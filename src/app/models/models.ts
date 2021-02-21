export interface ILesson {
  id: number,
  time: string;
  members: string[];
  color: string;
  columnId: number;
}

export interface IColumn {
  id: number;
  title: string;
}
