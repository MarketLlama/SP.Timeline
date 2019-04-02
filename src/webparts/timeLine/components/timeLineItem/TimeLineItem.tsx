import * as React from 'react';
import styles from '../TimeLine.module.scss';
import { TimeLineItemProps } from './TimeLineItemProps';
import { VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { Icon } from 'office-ui-fabric-react/lib/Icon';

export class TimeLineItem extends React.Component<TimeLineItemProps, {}> {
  constructor(props: TimeLineItemProps) {
    super(props);
  }
  public render() {

    const image: React.CSSProperties = {};
    image.backgroundImage = `url("${this.props.item.image}")`;

    return (
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date={this.props.item.date? this.props.item.date : ''}
        iconStyle={{ background: this.props.item.color, color: '#fff' }}
        icon={<Icon iconName={this.props.item.icon} className={styles.itemIcon} />}
      >
        {this.props.item.image? <div className={styles.itemImage} style={image}/> : null}
        <h3 className="vertical-timeline-element-title">{this.props.item.title}</h3>
        <p>
          {this.props.item.description}
        </p>
      </VerticalTimelineElement>
    );
  }
}

