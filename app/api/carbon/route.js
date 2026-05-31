import { NextResponse } from 'next/server';

// 模擬碳排計算模型常數
const EMISSION_FACTORS = {
  transport: {
    "Sea": 0.02, // kg CO2e per kg per 1000km
    "Air": 1.25,
    "Land": 0.15,
  },
  complexity: {
    "Low": 0.5,
    "Medium": 2.0,
    "High": 8.0,
  },
  packaging: {
    "Minimal": 0.05,
    "Standard": 0.2,
    "Premium": 0.8,
  }
};

export async function POST(request) {
  try {
    const data = await request.json();
    const { weightKg, origin, transportMethod, materialComplexity, packaging } = data;

    // 模擬複雜雲端運算延遲 (1.2秒)
    await new Promise((resolve) => setTimeout(resolve, 1200));

    // 1. Raw Materials: Base on weight and complexity
    const rawMaterialEmissions = weightKg * EMISSION_FACTORS.complexity[materialComplexity] * 0.4;

    // 2. Manufacturing: Base on complexity
    const manufacturingEmissions = EMISSION_FACTORS.complexity[materialComplexity] * 0.8;

    // 3. Transportation: Base on origin, weight and method
    const distance = origin === "Local" ? 200 : 8000; // km
    const transportEmissions = (distance / 1000) * weightKg * EMISSION_FACTORS.transport[transportMethod];

    // 4. Packaging
    const packagingEmissions = EMISSION_FACTORS.packaging[packaging];

    // Calculate Total
    const totalEmissions = rawMaterialEmissions + manufacturingEmissions + transportEmissions + packagingEmissions;

    return NextResponse.json({
      success: true,
      breakdown: {
        rawMaterials: parseFloat(rawMaterialEmissions.toFixed(2)),
        manufacturing: parseFloat(manufacturingEmissions.toFixed(2)),
        transportation: parseFloat(transportEmissions.toFixed(2)),
        packaging: parseFloat(packagingEmissions.toFixed(2)),
      },
      total: parseFloat(totalEmissions.toFixed(2)),
      unit: "kg CO2e"
    });

  } catch (error) {
    return NextResponse.json({ success: false, error: "Calculation Failed" }, { status: 500 });
  }
}
