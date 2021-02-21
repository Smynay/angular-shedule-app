export interface ILesson {
  id: number,
  time: string;
  members: IMember[];
  color: string;
  columnId: number;
}

export interface IColumn {
  id: number;
  title: string;
}

export interface IMember {
	name: string;
}