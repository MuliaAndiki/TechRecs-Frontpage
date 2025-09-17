export interface FormLoginType {
  email: string;
  password: string;
}

export interface FormRegisterType {
  email: string;
  password: string;
  fullName: string;
}

export interface PromptType {
  _id?: string;
  prompt: {
    text: string;
    category?: {
      deviceType?: string;
      brand?: string;
      budget: {
        min?: number;
        max?: number;
      };

      laptop?: {
        processor?: {
          brand?: string;

          cores?: number;
          generation?: string;
        };
        ram?: {
          size?: string;
          type?: string;
          upgradable?: boolean;
        };
        storage?: {
          type?: string;
          capacity?: string;
          expandable?: boolean;
        };
        gpu?: {
          brand?: string;

          vram?: string;
        };
        display?: {
          size?: string;
          resolution?: string;
          refreshRate?: number;
          panelType?: string;
        };
        battery?: {
          capacityWh?: number;
          lifeHours?: number;
        };
        weight?: number;
        os?: string;
        connectivity?: string[];
        purpose?: string;
      };

      phone?: {
        processor?: {
          brand?: string;
        };
        ram?: string;
        storage?: string;
        expandableStorage?: boolean;
        camera?: {
          rear?: {
            count?: number;
            resolution?: string;
            features?: string[];
          };
          front?: {
            resolution?: string;
            features?: string[];
          };
        };
        display?: {
          size?: string;
          resolution?: string;
          refreshRate?: number;
          panelType?: string;
        };
        battery?: {
          capacityMah?: number;
          fastCharge?: string;
          wirelessCharge?: boolean;
        };
        os?: string;
        connectivity?: string[];
        durability?: {
          waterproof?: boolean;
          dustproof?: boolean;
          rating?: string;
        };
        purpose?: string;
      };

      [key: string]: any;
    };
  };
  response?: string;
}
