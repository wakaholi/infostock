import React from 'react';

export class ListInInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
      const makeInfoList = this.props.listInInfo.filter(listInInfo => {
        return listInInfo.id === this.props.infoId || listInInfo.id !== ""
      });

      let makeSmallInfoList = [];

      for(let key in makeInfoList) {
        const smallInfoList = makeInfoList[key];

        for(let item in smallInfoList) {
          makeSmallInfoList.push(smallInfoList[item])
        }
      }

      if(!makeSmallInfoList) {
        return <div></div>
      } else {

        const smallInfoListJsx = makeSmallInfoList.map(smallList => {
          if(smallList !== this.props.infoId) {
            const tagList = smallList.map(smallListMap => {
              if(smallListMap.url !== "") {
                return(
                  <li>
                    <a href={smallListMap.url} target="blank">{smallListMap.title}</a>
                  </li>
                );
              } else {
                return(
                  <li>
                    <p>{smallListMap.title}</p>
                  </li>
                );
              }
            });
            tagList.shift();
            return tagList;
          }
        });

        return (
          <ul>
            {smallInfoListJsx}
          </ul>
        );

      }
  }

};
