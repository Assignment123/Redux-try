import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, List, Form, Grid, Input } from 'semantic-ui-react'
import ACTIONS from "../modules/action";

class ToDO extends Component {
    state = {};
    generate = () => {
        return this.props.items.map(item => (
            <List key={item.id}>
                <List.Item>
                    {item.description}
                </List.Item>
                <List.Item>
                    <Button onClick={this.handleDelete} value={item.id} active>Delete</Button>
                </List.Item>
                </List>
        ));
    };
    handleSubmit = event => {
        // console.log(this.state.item);
        this.setState({ item: "" });
        if (this.state.item !== "") {
            // add the item to the store
            this.props.createItem(this.state.item);
        }
        event.preventDefault();
    };
    handleDelete = event => {
        // delete the item from the store
        this.props.deleteItem(event.target.value);
    };
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };
    render() {
        return (
            <div>
                <div>
                    <Form  autoComplete="off" onSubmit={this.handleSubmit}>
                        <Form.Field>
                            <Input value={this.state.item ||''} name="item" onChange={this.handleChange} />
                        </Form.Field>
                        <Form.Field>
                            <Button >Add</Button>
                        </Form.Field>
                    </Form>
                </div>
                <div>
                    <Grid columns='three' divided>
                        <Grid.Row>

                            {this.generate()}
                        </Grid.Row>
                    </Grid>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => ({
    items: state.items
});
const mapDispatchToProps = dispatch => ({
    createItem: item => dispatch(ACTIONS.createItem(item)),
    deleteItem: id => dispatch(ACTIONS.deleteItem(id))
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)((ToDO));