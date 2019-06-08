import React, { Component } from 'react'

class Navigation extends Component {
  constructor() {
    super()
    this.state = {
      menuList: []
    }
    this.getMenuList = this.getMenuList.bind(this)
  }
  // componentDidMount() {
  //   this.getMenuList(this.props.content)
  // }




  getMenuList(content) {
    console.log(content);
    console.log('******')
    const issues = content
    const menu = []
    const patt = /(#+)\s+?(.+)/g
    let result = null
    while ((result = patt.exec(issues))) {
      console.log(result[1] , result[2] )
      menu.push({ level: result[1].length, title: result[2] })
    }
    const menuObj = []
    let level2Temp = {
      id: '',
      level: '',
      title: '',
      children: []
    }
    let level3Temp = null
    let level4Temp = null
    console.log(menu);
    for (let i = 0; i < menu.length; i ++) {
      if (menu[i].level === 2) {
        level2Temp = {
          id: i,
          level: 2,
          title: menu[i].title,
          children: [],
        }
        menuObj.push(level2Temp)
      } else if (menu[i].level === 3) {
        level3Temp = {
          id: i,
          level: 3,
          title: menu[i].title,
          children: [],
        }
        // if(menuObj.length === 0) menuObj.push(level2Temp)
        level2Temp.children.push(level3Temp)
      } else if (menu[i].level === 4) {
        level4Temp = {
          id: i,
          level: 4,
          title: menu[i].title,
        }
        level3Temp.children.push(level4Temp)


      }




    }

    // console.log(menuObj);
    // this.setState({
    //   menuList:
    // })
    return menuObj;
  }

  render() {
    // console.log(this.props.content);

    const menuList = this.getMenuList(this.props.content);
    return (
      <div className="article-navigation-content">
        <ul>
          {menuList.map(level2 => (
            <li key={level2.id}
              style={{
                  listStyleType: level2.title ? 'disc' : 'none' ,
                  marginLeft: level2.title ? '10': '0'}}
            >
              {level2.title ? <a href={'#' + level2.title.trim().toLowerCase()}>{level2.title}</a>  : ''}
              <ul>
                {
                  level2.children.map(
                    level3 => (
                    <li key={level3.id}>
                      <a href={'#' + level3.title}>{level3.title.trim().toLowerCase()}</a>
                      <ul>
                        {
                          level3.children.map(level4 => (
                          <li key={level4.id}>
                            <a href={'#' + level4.title}>{level4.title.trim().toLowerCase()}</a>
                          </li>))
                        }
                      </ul>
                    </li>))
                  }
              </ul>
            </li>))
          }
        </ul>
      </div>
    )
  }
}

export default Navigation
