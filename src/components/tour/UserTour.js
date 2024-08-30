import React, { Component }from "react";
import Tour from "react-user-tour";
export default class UserTour extends Component {
    constructor() {
        super();
        this.state = {
            isTourActive: false,
            tourStep: 1
        };
    }
    render() {
        return (
            <div style={{position: "absolute", top: 0, left: 0}}>
                <Tour
                    active={this.state.isTourActive}
                    step={this.state.tourStep}
                    onNext={(step) => this.setState({tourStep: step})}
                    onBack={(step) => this.setState({tourStep: step})}
                    onCancel={() => this.setState({isTourActive: false})}
                    steps={[
                        {
                            step: 1,
                            selector: ".dashboard-link .active",
                            title: <div style={{color: "#313131", fontWeight: 700}}>Sidebar</div>,
                            body: <div style={{color: "#425466"}}>Lorem Ipsum is simply dummy text of the printing</div>
                        },
                        {
                            step: 2,
                            selector: ".header-sticky",
                            title: <div style={{color: "#313131", fontWeight: 700}}>Header</div>,
                            body: <div style={{color: "#425466"}}>Lorem Ipsum is simply dummy text of the printing</div>
                        },
                        {
                            step: 3,
                            selector: ".basic-detail",
                            title: <div style={{color: "#313131", fontWeight: 700}}>Policy Benchmarking</div>,
                            body: <div style={{color: "#425466"}}>Policy Benchmarking helps to assess managers' overwighting and underweighting of asset class and provides an overview whether the manager has made the right decisions. Each benchmarking excercise answers a different question. We fruther drill fown from a top down approach.</div>
                        },
                        {
                            step: 4,
                            selector: ".right-bar",
                            title: <div style={{color: "#313131", fontWeight: 700}}>Data Input</div>,
                            body: <div style={{color: "#425466"}}>For comparison the user could enter the target return for their pool of capital and then choose from an Inflation metrics, alternatively the user could also enter their own assumed rate of inflation. The return objective expressed in real terms is appropriate over a long period of time.</div>
                        }
                    ]}
                />
            </div>
        );
    }
}