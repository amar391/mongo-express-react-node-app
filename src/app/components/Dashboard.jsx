import React from "react";
import { connect } from "react-redux";

import TaskList from "./TaskList";

const mapStateToProps = state => {
    return {
        groups: state.groups
    }
}

const Dashboard  = ({ groups }) => (
    <div className="row">
        {groups.map(group => (
            <TaskList
                key={group.id}
                id={group.id}
                name={group.name}
                className="col"
            />
        ))}
    </div>
)

export default connect(mapStateToProps,null)(Dashboard);