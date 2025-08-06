import React, { useState } from 'react'
import SideBar from './common/SideBar'
import TemplateCustomizer from './common/TemplateCustomizer'
import Dashboard from './common/Dashboard';

const Layout = () => {
  // Color Customization State
  const [colorScheme, setColorScheme] = useState({
    primary: '#3B82F6',     // blue-500
    secondary: '#8B5CF6',   // violet-500
    accent: '#10B981',      // emerald-500
    warning: '#F59E0B',     // amber-500
    success: '#10B981',     // emerald-500
    error: '#EF4444',       // red-500
    info: '#06B6D4',        // cyan-500
    background: '#F9FAFB',  // gray-50
    surface: '#FFFFFF',     // white
    text: '#1F2937',        // gray-800
    textSecondary: '#6B7280' // gray-500
  });

  // Helper function to convert hex to RGB
  const hexToRgb = (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? [
      parseInt(result[1], 16),
      parseInt(result[2], 16),
      parseInt(result[3], 16)
    ] : [59, 130, 246]; // fallback to blue
  };

  // Helper function to generate lighter/darker variants
  const adjustColor = (hex, amount) => {
    const rgb = hexToRgb(hex);
    const adjusted = rgb.map(color => {
      const newColor = color + amount;
      return Math.max(0, Math.min(255, newColor));
    });
    return `rgb(${adjusted.join(', ')})`;
  };

  // Helper function to generate dynamic styles based on color scheme
  const getColoredStyle = (type, variant = 'default') => {
    const { primary, secondary, accent, warning, success, error, info } = colorScheme;

    const colorMap = {
      primary: {
        bg: `rgb(${hexToRgb(primary).join(', ')})`,
        bgLight: `rgba(${hexToRgb(primary).join(', ')}, 0.1)`,
        bgMedium: `rgba(${hexToRgb(primary).join(', ')}, 0.2)`,
        bgHover: `rgba(${hexToRgb(primary).join(', ')}, 0.15)`,
        text: primary,
        textDark: adjustColor(primary, -30),
        border: primary,
        borderLight: `rgba(${hexToRgb(primary).join(', ')}, 0.3)`,
        shadow: `rgba(${hexToRgb(primary).join(', ')}, 0.25)`
      },
      secondary: {
        bg: `rgb(${hexToRgb(secondary).join(', ')})`,
        bgLight: `rgba(${hexToRgb(secondary).join(', ')}, 0.1)`,
        bgMedium: `rgba(${hexToRgb(secondary).join(', ')}, 0.2)`,
        bgHover: `rgba(${hexToRgb(secondary).join(', ')}, 0.15)`,
        text: secondary,
        textDark: adjustColor(secondary, -30),
        border: secondary,
        borderLight: `rgba(${hexToRgb(secondary).join(', ')}, 0.3)`,
        shadow: `rgba(${hexToRgb(secondary).join(', ')}, 0.25)`
      },
      accent: {
        bg: `rgb(${hexToRgb(accent).join(', ')})`,
        bgLight: `rgba(${hexToRgb(accent).join(', ')}, 0.1)`,
        bgMedium: `rgba(${hexToRgb(accent).join(', ')}, 0.2)`,
        bgHover: `rgba(${hexToRgb(accent).join(', ')}, 0.15)`,
        text: accent,
        textDark: adjustColor(accent, -30),
        border: accent,
        borderLight: `rgba(${hexToRgb(accent).join(', ')}, 0.3)`,
        shadow: `rgba(${hexToRgb(accent).join(', ')}, 0.25)`
      },
      warning: {
        bg: `rgb(${hexToRgb(warning).join(', ')})`,
        bgLight: `rgba(${hexToRgb(warning).join(', ')}, 0.1)`,
        bgMedium: `rgba(${hexToRgb(warning).join(', ')}, 0.2)`,
        bgHover: `rgba(${hexToRgb(warning).join(', ')}, 0.15)`,
        text: warning,
        textDark: adjustColor(warning, -30),
        border: warning,
        borderLight: `rgba(${hexToRgb(warning).join(', ')}, 0.3)`,
        shadow: `rgba(${hexToRgb(warning).join(', ')}, 0.25)`
      },
      success: {
        bg: `rgb(${hexToRgb(success).join(', ')})`,
        bgLight: `rgba(${hexToRgb(success).join(', ')}, 0.1)`,
        bgMedium: `rgba(${hexToRgb(success).join(', ')}, 0.2)`,
        bgHover: `rgba(${hexToRgb(success).join(', ')}, 0.15)`,
        text: success,
        textDark: adjustColor(success, -30),
        border: success,
        borderLight: `rgba(${hexToRgb(success).join(', ')}, 0.3)`,
        shadow: `rgba(${hexToRgb(success).join(', ')}, 0.25)`
      },
      error: {
        bg: `rgb(${hexToRgb(error).join(', ')})`,
        bgLight: `rgba(${hexToRgb(error).join(', ')}, 0.1)`,
        bgMedium: `rgba(${hexToRgb(error).join(', ')}, 0.2)`,
        bgHover: `rgba(${hexToRgb(error).join(', ')}, 0.15)`,
        text: error,
        textDark: adjustColor(error, -30),
        border: error,
        borderLight: `rgba(${hexToRgb(error).join(', ')}, 0.3)`,
        shadow: `rgba(${hexToRgb(error).join(', ')}, 0.25)`
      },
      info: {
        bg: `rgb(${hexToRgb(info).join(', ')})`,
        bgLight: `rgba(${hexToRgb(info).join(', ')}, 0.1)`,
        bgMedium: `rgba(${hexToRgb(info).join(', ')}, 0.2)`,
        bgHover: `rgba(${hexToRgb(info).join(', ')}, 0.15)`,
        text: info,
        textDark: adjustColor(info, -30),
        border: info,
        borderLight: `rgba(${hexToRgb(info).join(', ')}, 0.3)`,
        shadow: `rgba(${hexToRgb(info).join(', ')}, 0.25)`
      }
    };

    return colorMap[type] || colorMap.primary;
  };

  const [showCustomizer, setShowCustomizer] = useState(false);
  const [sidebarTemplate, setSidebarTemplate] = useState(1);
  const [headerTemplate, setHeaderTemplate] = useState(1);
  const [announcementTemplate, setAnnouncementTemplate] = useState(1);
  const [recentActivity, setRecentActivity] = useState(1);


  return (
    <>
      <TemplateCustomizer
        colorScheme={colorScheme}
        setColorScheme={setColorScheme}
        getColoredStyle={getColoredStyle}
        setShowCustomizer={setShowCustomizer}
        showCustomizer={showCustomizer}
        sidebarTemplate={sidebarTemplate}
        setSidebarTemplate={setSidebarTemplate}
        setHeaderTemplate={setHeaderTemplate}
        headerTemplate={headerTemplate}
        announcementTemplate={announcementTemplate}
        setAnnouncementTemplate={setAnnouncementTemplate}
        recentActivity={recentActivity}
        setRecentActivity={setRecentActivity}
      />
      <SideBar
        colorScheme={colorScheme}
        getColoredStyle={getColoredStyle}
        setShowCustomizer={setShowCustomizer}
        sidebarTemplate={sidebarTemplate}
        headerTemplate={headerTemplate}
        announcementTemplate={announcementTemplate}
        recentActivity={recentActivity}
      />
    </>
  )
}

export default Layout