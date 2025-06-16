export type ProductTrackingType = {
  id: string;

  numberOfPackages: number;

  grossWeight?: number;

  employee: string;

  nomenclatureProduct: string;

  productGrade: string;

  packagingType: string;

  farmLocation: string;

  measuringUnit: string;

  status: string;

  netWeight: number;

  createdAt: Date;

  updatedAt: Date;

  amount?: number;

  rate?: number;
};
