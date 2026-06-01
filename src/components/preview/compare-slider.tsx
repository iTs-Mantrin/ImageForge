"use client";

import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider";

export function CompareSlider() {
  return (
    <div className="overflow-hidden rounded-3xl border border-border">
      <ReactCompareSlider
        itemOne={<ReactCompareSliderImage src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='900' height='520'%3E%3Crect width='900' height='520' fill='%23dff8f4'/%3E%3Ccircle cx='280' cy='230' r='120' fill='%230f766e'/%3E%3Ctext x='430' y='250' font-size='54' fill='%230f172a'%3EOriginal%3C/text%3E%3C/svg%3E" alt="Original preview" />}
        itemTwo={<ReactCompareSliderImage src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='900' height='520'%3E%3Crect width='900' height='520' fill='%23fff4d6'/%3E%3Ccircle cx='280' cy='230' r='120' fill='%23f59e0b'/%3E%3Ctext x='430' y='250' font-size='54' fill='%230f172a'%3EOptimized%3C/text%3E%3C/svg%3E" alt="Optimized preview" />}
        defaultPosition={58}
      />
    </div>
  );
}
