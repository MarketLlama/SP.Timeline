import * as React from 'react';
import styles from './TimeLine.module.scss';
import { ITimeLineProps } from './ITimeLineProps';
import { Placeholder } from '@pnp/spfx-controls-react/lib/Placeholder';
import { TimeLineItem } from './timeLineItem';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';

export default class TimeLine extends React.Component<ITimeLineProps, {}> {
  public render(): React.ReactElement<ITimeLineProps> {

    console.log(this.props.columns);
    return (
      <div className={ styles.timeLine }>
        { this.props.collectionData && this.props.collectionData.length > 0 ? (
        <VerticalTimeline layout={this.props.columns}>
          {this.props.collectionData.map((item, idx) => <TimeLineItem
            item={item}
            key={idx}
          />)}
        </VerticalTimeline> )
        : (
          <Placeholder
            iconName='Edit'
            iconText={'Configure your timeline'}
            description={'Please configure the web part in order to show tiles the timeline'}
            buttonLabel={'Configure'}
            onConfigure={this.props.fPropertyPaneOpen} />
        )
      }
      </div>
    );
  }
}
