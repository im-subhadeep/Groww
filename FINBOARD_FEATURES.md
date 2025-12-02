# FinBoard - Customizable Finance Dashboard

## 🎯 Assignment Overview

A comprehensive finance dashboard built for Groww internship assignment with real-time data visualization, customizable widgets, and professional UI/UX.

## ✅ Implemented Features

### 1. Dashboard Core

- **Modern Dark Theme**: Professional financial app aesthetic
- **Responsive Layout**: Grid-based widget arrangement
- **State Management**: Redux toolkit with localStorage persistence
- **Real-time Updates**: Configurable refresh intervals

### 2. Widget System

#### 🃏 Card Widgets

- Display key financial metrics
- Company name, price, and change indicators
- Compact format for quick insights

#### 📊 Table Widgets

- Comprehensive stock data display
- Search functionality across all fields
- Pagination for large datasets
- Sortable columns

#### 📈 Chart Widgets (NEW!)

- **Interactive Price Charts**: Line charts with time-series data
- **Volume Analysis**: Bar charts showing trading volume
- **Moving Averages**: 50-day and 200-day DMA overlays
- **Period Selection**: 1M, 3M, 6M, 1Y time ranges
- **Technical Indicators**: Price change calculations
- **Stock Symbol Display**: Extracted from API URLs

### 3. API Integration

#### Indian Stock Market API

- **Primary Endpoint**: `https://stock.indianapi.in/`
- **Authentication**: X-Api-Key header support
- **Multiple Endpoints**:
  - `/trending_stocks` - For table/card widgets
  - `/historical_data` - For chart widgets
- **Flexible Parameters**: Stock symbols, time periods, filters

### 4. Widget Management

- **Add Widget Modal**: Intuitive configuration interface
- **Quick Start Presets**: Pre-configured API endpoints
- **Field Selection**: Dynamic field mapping from API responses
- **Edit Functionality**: Modify existing widgets
- **Delete & Refresh**: Full CRUD operations

### 5. Data Visualization (Recharts)

- **Line Charts**: Stock price movements
- **Bar Charts**: Volume analysis
- **Composed Charts**: Multiple metrics overlay
- **Interactive Tooltips**: Detailed data on hover
- **Responsive Design**: Auto-scaling charts
- **Custom Legends**: Clear metric identification

## 🛠 Technical Stack

### Frontend

- **Next.js 15.5.2**: React framework with TypeScript
- **Tailwind CSS**: Utility-first styling
- **Recharts**: Data visualization library
- **Lucide Icons**: Modern icon system

### State Management

- **Redux Toolkit**: Centralized state management
- **localStorage**: Data persistence
- **React Hooks**: Component state management

### API Integration

- **Fetch API**: HTTP requests
- **Header Management**: Custom authentication
- **Error Handling**: Comprehensive error states
- **Loading States**: User feedback during requests

## 📋 Widget Configuration Options

### 1. Display Modes

- **Card**: Compact metric display
- **Table**: Detailed data grid
- **Chart**: Time-series visualization

### 2. API Configuration

- **Custom URLs**: Any REST API endpoint
- **Headers**: X-Api-Key, Authorization, etc.
- **Field Selection**: Choose specific data points
- **Refresh Intervals**: 30s, 1min, 5min, 15min, 30min, 1hr

### 3. Chart Options

- **Time Periods**: 1 month to 1 year
- **Moving Averages**: Toggle 50/200 DMA
- **Volume Display**: Separate volume chart
- **Price Indicators**: Change calculations

## 🚀 Quick Start Guide

### 1. Add a Trending Stocks Table

1. Click "Add Widget"
2. Use preset: "📈 Trending Stocks (Table)"
3. Update API key in headers
4. Test API connection
5. Select desired fields
6. Add widget

### 2. Add a Stock Price Chart

1. Click "Add Widget"
2. Use preset: "📊 Stock Chart (RELIANCE)" or "📊 Stock Chart (TCS)"
3. Update API key in headers
4. Test API connection
5. Chart will auto-configure for time-series data
6. Add widget

### 3. Customize Widgets

- **Edit**: Click settings icon on any widget
- **Refresh**: Manual refresh or auto-refresh
- **Delete**: Remove unwanted widgets
- **Rearrange**: Drag and drop (future enhancement)

## 🎨 UI/UX Features

### Visual Design

- **Dark Theme**: Consistent with financial apps
- **Color Coding**: Green/red for gains/losses
- **Typography**: Clear hierarchy and readability
- **Spacing**: Proper whitespace and padding

### Interactive Elements

- **Hover Effects**: Button and widget interactions
- **Loading States**: Spinners and skeleton screens
- **Error States**: Clear error messaging
- **Success Feedback**: API connection confirmations

### Responsive Design

- **Grid Layout**: Automatic widget arrangement
- **Mobile Ready**: Responsive breakpoints
- **Flexible Sizing**: Widgets adapt to content

## 📊 Sample Data Integration

### Trending Stocks API Response

```json
{
  "data": [
    {
      "company_name": "Reliance Industries Ltd",
      "current_price": 1383.3,
      "change": 6.3,
      "pct_change": 0.46
    }
  ]
}
```

### Historical Data API Response

```json
{
  "datasets": [
    {
      "metric": "Price",
      "values": [["2025-08-12", "1380.40"], ...]
    },
    {
      "metric": "Volume",
      "values": [["2025-08-12", "12500000"], ...]
    }
  ]
}
```

## 🔧 Future Enhancements

### Phase 2 Features

- **Drag & Drop**: Widget repositioning
- **Resize Widgets**: Custom widget sizing
- **More Chart Types**: Candlestick, Area charts
- **Alerts**: Price alerts and notifications
- **Export**: Data export functionality

### Phase 3 Features

- **Multiple Dashboards**: Create themed dashboards
- **Sharing**: Share dashboard configurations
- **Real-time Updates**: WebSocket integration
- **Advanced Filters**: Complex data filtering

## 🏆 Assignment Requirements Met

✅ **Customizable Widgets**: Card, Table, Chart types
✅ **Real-time Data**: API integration with refresh
✅ **Modern UI**: Professional design system
✅ **Interactive Features**: Full CRUD operations
✅ **Data Visualization**: Charts and tables
✅ **API Integration**: Indian stock market data
✅ **Error Handling**: Comprehensive error states
✅ **Responsive Design**: Mobile-friendly layout

## 📈 Performance & Scalability

### Optimizations

- **Component Memoization**: React.memo for charts
- **Efficient Re-renders**: Proper dependency arrays
- **Data Transformation**: Optimized chart data processing
- **Error Boundaries**: Graceful error handling

### Scalability Considerations

- **Modular Architecture**: Easy to add new widget types
- **Type Safety**: Full TypeScript coverage
- **Configurable APIs**: Support for any REST endpoint
- **State Management**: Scalable Redux patterns

---

## 🎯 Live Demo Features

The dashboard showcases:

1. **Professional UI** matching industry standards
2. **Real Financial Data** from Indian stock markets
3. **Interactive Charts** with technical analysis
4. **Flexible Configuration** for any API
5. **Production Ready** code quality
