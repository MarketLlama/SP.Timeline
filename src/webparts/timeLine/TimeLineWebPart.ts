import * as React from 'react';
import * as ReactDom from 'react-dom';

import 'react-vertical-timeline-component/style.min.css';

import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import {
  IPropertyPaneConfiguration,
  PropertyPaneDropdown
} from '@microsoft/sp-property-pane';

import * as strings from 'TimeLineWebPartStrings';
import TimeLine from './components/TimeLine';
import { ITimeLineProps } from './components/ITimeLineProps';
import { PropertyFieldCollectionData, CustomCollectionFieldType } from '@pnp/spfx-property-controls/lib/PropertyFieldCollectionData';

export interface ITimeLineWebPartProps {
  collectionData: any[];
  columns : string;
}

export default class TimeLineWebPart extends BaseClientSideWebPart<ITimeLineWebPartProps> {

  public render(): void {
    const element: React.ReactElement<ITimeLineProps > = React.createElement(
      TimeLine,
      {
        collectionData: this.properties.collectionData,
        columns : this.properties.columns,
        fPropertyPaneOpen: this.context.propertyPane.open
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyFieldCollectionData("collectionData", {
                  key: "collectionData",
                  label: "Timeline Items",
                  panelHeader: "Timeline Items",
                  manageBtnLabel: "Manage Timeline data",
                  value: this.properties.collectionData,
                  fields: [
                    {
                      id: "title",
                      title: "Title",
                      type: CustomCollectionFieldType.string,
                      required: true
                    },
                    {
                      id: "description",
                      title: "Description",
                      type: CustomCollectionFieldType.string,
                      required: true
                    },
                    {
                      id: "date",
                      title: "Detail or Date",
                      type: CustomCollectionFieldType.string
                    },
                    {
                      id: "image",
                      title: "Image URL",
                      type: CustomCollectionFieldType.url,
                    },
                    {
                      id: "color",
                      title: "Hexadecimal Color of Item",
                      type: CustomCollectionFieldType.string,
                    },
                    {
                      id: "icon",
                      title: "Office Fabric Icon",
                      type: CustomCollectionFieldType.fabricIcon,
                      required: true
                    }
                  ],
                  disabled: false
                }),
                PropertyPaneDropdown('columns',{
                  label : 'Number of Columns',
                  selectedKey : '2-columns',
                  options:[{
                    key: "1-column",
                    text: "1"
                  },
                  {
                    key: "2-columns",
                    text: "2"
                  }]
                }),
              ]
            }
          ]
        }
      ]
    };
  }
}
