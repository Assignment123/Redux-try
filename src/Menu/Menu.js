import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react';
import { Link } from "react-router-dom";
// import { Input } from 'semantic-ui-react'


export default class MenuExampleInvertedSecondary extends Component {
  state = { activeItem: '' }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state;
    const menusArray =[
       {'text':'Home','Link':''},
       {'text':'Contact-us','Link':'contact-us'},
       {'text':'About','Link':'about'},
       {'api':'Api','Link':'api'}
    ];
    return (
      <Segment inverted>
        <Menu inverted pointing secondary>
        {menusArray.map((menuName,i)=>(
             <Menu.Item key={i} name={menuName.text} active={menuName.text==activeItem?true:false}  >
                         <Link to={"/"+menuName.Link}>{menuName.text}
                         </Link>
             </Menu.Item>
        )
            )}
          
        </Menu>
      </Segment>
    )
  }
}
{/* <Input icon='search' placeholder='Search...' /> */}




// import React, { Component } from 'react'
// import { Grid, Sticky, Table, Visibility } from 'semantic-ui-react'

// import Wireframe from '../Wireframe'

// export default class VisibilityExampleOffset extends Component {
//   state = {
//     calculations: {
//       topPassed: false,
//       bottomPassed: false,
//       topVisible: false,
//       bottomVisible: false,
//     },
//   }

//   handleContextRef = contextRef => this.setState({ contextRef })

//   handleUpdate = (e, { calculations }) => this.setState({ calculations })

//   render() {
//     const { calculations, contextRef } = this.state

//     return (
//       <div ref={this.handleContextRef}>
//         <Grid columns={2}>
//           <Grid.Column>
//             <Visibility offset={[10, 10]} onUpdate={this.handleUpdate}>
//               <Wireframe />
//             </Visibility>
//           </Grid.Column>

//           <Grid.Column>
//             <Sticky context={contextRef}>
//               <Table celled>
//                 <Table.Header>
//                   <Table.Row>
//                     <Table.HeaderCell>Calculation</Table.HeaderCell>
//                     <Table.HeaderCell>Value</Table.HeaderCell>
//                   </Table.Row>
//                 </Table.Header>
//                 <Table.Body>
//                   <Table.Row>
//                     <Table.Cell>topVisible</Table.Cell>
//                     <Table.Cell>{calculations.topVisible.toString()}</Table.Cell>
//                   </Table.Row>
//                   <Table.Row>
//                     <Table.Cell>bottomVisible</Table.Cell>
//                     <Table.Cell>{calculations.bottomVisible.toString()}</Table.Cell>
//                   </Table.Row>
//                   <Table.Row>
//                     <Table.Cell>topPassed</Table.Cell>
//                     <Table.Cell>{calculations.topPassed.toString()}</Table.Cell>
//                   </Table.Row>
//                   <Table.Row>
//                     <Table.Cell>bottomPassed</Table.Cell>
//                     <Table.Cell>{calculations.bottomPassed.toString()}</Table.Cell>
//                   </Table.Row>
//                 </Table.Body>
//               </Table>
//             </Sticky>
//           </Grid.Column>
//         </Grid>
//       </div>
//     )
//   }
// }
