import { ITimeLineWebPartProps } from "../TimeLineWebPart";

export interface ITimeLineProps extends ITimeLineWebPartProps{
  fPropertyPaneOpen: () => void;
}
