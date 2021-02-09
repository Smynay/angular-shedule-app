export interface ILesson {
  time: string;
  members: string[];
}

export interface IColumn {
  title: string;
  cardsData: ILesson[];
}
