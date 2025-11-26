import React from 'react';
import Toolbar from "./Toolbar";
import ProjectList from "./ProjectList";
import projectsData from "../data/projectsData.json";

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFilter: 'All',
      filters: ["All", "Websites", "Flayers", "Business Cards"]
    };
  }

  onSelectFilter = (filter) => {
    this.setState({
      selectedFilter: filter
    });
  };

  getFilteredProjects() {
    const { selectedFilter } = this.state;
    return selectedFilter === "All"
      ? projectsData
      : projectsData.filter(project => project.category === selectedFilter);
  }

  render() {
    const { filters, selectedFilter } = this.state;
    const filteredProjects = this.getFilteredProjects();

    return (
      <div className="portfolio">
        <Toolbar
          filters={filters}
          selected={selectedFilter}
          onSelectFilter={this.onSelectFilter}
        />
        <ProjectList projects={filteredProjects} />
      </div>
    );
  }
}

export default Portfolio;
