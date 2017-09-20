import React, { Component } from 'react';
import DashboardRow from './DashboardRow'


class Dashboard extends Component {

  render() {
    let DashboardItem;
    var counter = 0
    if (this.props.bodys) {
      DashboardItem = this.props.bodys.map(body => {

        console.log("hahaduedue" + this.props.bodys[0].$class)

      })
    }
    return (

      <div>
        <table class="table table-bordered table-striped table-condensed flip-content"  id="sample_test">
          <thead class="flip-content" >
            <tr>
              <th><i class="fa fa-info-circle"></i> Transaction ID </th>
              <th class="hidden-xs"><i class="fa fa-clock"></i> Time </th>
              <th><i class="fa fa-shopping-cart"></i> Amount </th>
              <th><i class="fa fa-user"></i> Client ID </th>
              <th><i class="fa fa-user"></i> Merchant ID </th>
              <th><i class="fa fa-times"></i> Transaction Type </th>
              <th><i class="fa fa-info"></i> Transaction Class </th>
            </tr>
          </thead>
          <DashboardRow bodys={this.props.bodys} />
        </table>
      </div>
    );

  };
}


export default Dashboard;