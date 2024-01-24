"use client";

import * as d3 from "d3";
import { useEffect } from "react";

export default function D3Map({
  map,
  zoom,
  center,
  markers,
  onEachFeature,
  prj,
}: {
  map: any;
  zoom: number;
  center: [number, number];
  onEachFeature: any;
  markers: any;
  prj: any;
}) {
  useEffect(() => {
    draw();
    return () => {
      d3.select("#container").html("");
    };
  }, []);

  const draw = () => {
    let width = 600;
    let height = 600;

    let projection = d3
      .geoAlbersUsa()
      .fitSize([width, height])
      .translate([width / 2 - 40, height - 50])
      .scale(600);

    switch (prj) {
      case "Albers":
        projection = d3
          .geoAlbers()
          .fitSize([width, height])
          .translate([width / 2 - 40, height - 50])
          .scale(600)
          .parallels([83.11, 41.68]);
        break;
      case "Albers USA":
        projection = d3
          .geoAlbersUsa()
          .scale(800)
          .translate([width / 2, height / 2]);
        break;
      case "north_america":
        projection = d3
          .geoAlbers()
          .center([-2, 50])
          .translate([width / 2, height / 2])
          .scale(550)
          .parallels([55, 36]);
        break;
      case "europe":
        projection = d3
          .geoConicConformal()
          .parallels([35, 65])
          .rotate([-20, 0])
          .scale(700)
          .center([0, 52])
          .translate([width / 2, height / 2])
          .clipExtent([
            [0, 0],
            [width, height],
          ])
          .precision(0.2);
        break;
      case "south_america":
        projection = d3
          .geoMercator()
          .center([2.5, -28])
          .rotate([66, 0])
          .scale(height / 1.5)
          .translate([width / 2, height / 2]);
        break;
      case "oceania":
        projection = d3
          .geoMercator()
          .center([0, -25])
          .rotate([-145, 0])
          .scale(height / 1.25)
          .translate([width / 2, height / 2]);
        break;
      default:
        projection = d3
        .geoConicConformal()
        .parallels([35, 65])
        .rotate([-20, 0])
        .scale(zoom)
        .center(center)
        .translate([width / 2, height / 2])
        .clipExtent([
          [0, 0],
          [width, height],
        ])
        .precision(0.2);
        break;

    }

    let geoGenerator = d3.geoPath().projection(projection);

    markers = markers.map((marker) => {
      return {
        ...marker,
        lat: marker.coordinates[0],
        long: marker.coordinates[1],
      };
    });

    d3.select("#content g.map")
      .selectAll("path")
      .data(map.features)
      .enter()
      .append("path")
      .attr("d", geoGenerator)
      .attr("fill", "#acb6a0")
      .attr("stroke", "#637f62");

    d3.select("#content g.map")
      .selectAll("circle")
      .data(markers)
      .enter()
      .append("circle")
      .attr("r", 3)
      .attr("cx", 1.5)
      .attr("cy", 1.5)
      .attr("stroke", (d) => {
        let color = "#e2856e";
        switch (d.type) {
          case "city":
            color = "#6d7d9c";
            break;
          case "region":
            color = "#e2856e";
            break;
          case "natural":
            color = "#769575";
            break;
          default:
            color = "#e2856e";
            break;
        }
        return color;
      })
      .attr("fill", "#fff")
      .attr("stroke-width", "1.5")
      .attr("transform", (d) => {
        let p = projection([d.long, d.lat]);
        return `translate(${p[0] - 1.5}, ${p[1] - 1.5})`;
      });
  };

  return (
    <div id="content" className="flex justify-center items-center">
      <svg className="border border-black w-[600px] h-[600px]">
        <g className="map"></g>
      </svg>
    </div>
  );
}
