export default interface INotificationItemProps {
    title: string,
    amount: number,
    type: ETypeProps,
    status: EStatusProps,
    time: string,
    income: boolean
  }
  
  enum ETypeProps {
    Electric = 'Electric',
    Water = 'Water',
    Market = 'Market',
    Scan = 'Scan',
    QR = 'QR',
    TV = 'TV'
  }
  
  enum EStatusProps {
    None = 0,
    Success,
    Processing
  }

  export const getIcon = (type: ETypeProps): any => {
    switch(type) {
        case ETypeProps.Electric: return require('../assets/ic-electric.png')
        case ETypeProps.Water: return require('../assets/ic-water.png')
        case ETypeProps.Market: return require('../assets/ic-shopping.png')
        case ETypeProps.Scan: return require('../assets/ic-scan.png')
        case ETypeProps.QR: return require('../assets/ic-qr.png')
        case ETypeProps.TV: return require('../assets/ic-television.png')
    }
  }

  export const getColor = (type: ETypeProps): string => {
    switch(type) {
        case ETypeProps.Electric: return "#FABE3C"
        case ETypeProps.Water: return "#84DBFF"
        case ETypeProps.Market: return "#3DAB25"
        case ETypeProps.Scan: return "#665AF0"
        case ETypeProps.QR: return "#665AF0"
        case ETypeProps.TV: return "#2D82E1"
    }
  } 

  export const transformStatus = (status: EStatusProps): string => {
    switch(status) {
        case EStatusProps.Processing: return "Processing"
        case EStatusProps.Success: return "Success"
        default: return "Unknown"
    }
  }

  export const getStatusColor = (status: EStatusProps): string => {
    switch(status) {
        case EStatusProps.Processing: return "#FABE3C"
        case EStatusProps.Success: return "#3DAB25"
        default: return "#EB5A5A"
    }
  }

  export const getInComeColor = (income: boolean) : string => {
    if (income) return "#3DAB25"
    return "#EB5A5A"
  }