package com.example.PropertyTaxCalculator;

public class PropertyTaxCalculator {
    public static double calculateOpenLandTax(double UC, double PlotSize, double StructureSize, double proportionateCommonArea, double taxRate, String Res) {
        double BVr = 2200;
        double BVnr = 3500;
        double FSI = (StructureSize / PlotSize) * 100;

        if (Res.equals("residential")) {
            return ((BVr * UC * FSI * PlotSize) * taxRate) + proportionateCommonArea;
        } else {
            return ((BVnr * UC * FSI * PlotSize) * taxRate) + proportionateCommonArea;
        }
    }

    public static double calculateBuildingTax(double UC, double NTB, double AF, double FF, double CA, double proportionateCommonArea, double taxRate, String Res) {
        double BVr = 2200;
        double BVnr = 3500;

        if (Res.equals("residential")) {
            return ((BVr * UC * NTB * AF * FF * CA) * taxRate) + proportionateCommonArea;
        } else {
            return ((BVnr * UC * NTB * AF * FF * CA) * taxRate) + proportionateCommonArea;
        }
    }
}


