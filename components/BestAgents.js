import React from 'react';
import AgentCard from "./AgentCard";

const BestAgents = () => {
    return(
            <section className='section-agents section-t8'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className='title-wrap d-flex justify-content-between'>
                                <div className="title-box">
                                    <h2 className="title-a">Best Agents</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">

                       <AgentCard/>
                        <AgentCard/>
                        <AgentCard/>
                    </div>
                </div>
            </section>

    )
}

export default BestAgents;
