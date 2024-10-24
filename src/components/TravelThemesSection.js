import React from "react";

const travelThemes = [
  { title: "Culture", image: "path-to-culture-image" },
  { title: "Wildlife", image: "path-to-wildlife-image" },
  { title: "Active", image: "path-to-active-image" },
  { title: "Celebrations", image: "path-to-celebrations-image" },
  { title: "Wellness", image: "path-to-wellness-image" },
  { title: "Women Travel", image: "path-to-women-travel-image" },
];

function TravelThemesSection() {
  return (
    <div className="py-10 bg-gray-50">
      <h2 className="text-3xl font-semibold text-center mb-10">Travel Themes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {travelThemes.map((theme, index) => (
          <div key={index} className="rounded-lg overflow-hidden shadow-lg">
            <img src={theme.image} alt={theme.title} className="w-full h-40 object-cover" />
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold">{theme.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TravelThemesSection;
