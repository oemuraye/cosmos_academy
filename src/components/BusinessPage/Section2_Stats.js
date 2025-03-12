import React from 'react'

const StatsSection = () => {
  return (
    <section className="stats-section padding_y-spacing container my-5">
        <div className="d-flex gap-3 gap-md-5 flex-wrap align-items-center">
            <div className="stats-card">
                <h1>94%</h1>
                <p>of employees are more likely to stay with a company that invests in their career growth.</p>
            </div>
            <div className="stats-card">
                <h1>218%</h1>
                <p>of companies that invest in training programs see a 218% increase in income per employee.</p>
            </div>
            <div className="stats-card">
                <h1>48%</h1>
                <p>of working population would switch to a new job if it offered increased skills training.</p>
            </div>
        </div>
    </section>
  )
}

export default StatsSection