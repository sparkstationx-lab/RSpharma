import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import {
  Search,
  Filter,
  Grid,
  List,
  Pill,
  ShieldCheck,
  Award,
  Phone,
  MessageSquare,
  FileText,
  Download,
  Sparkles,
  X,
  CheckCircle2,
  Tag,
  ArrowUpDown,
  Building2,
  PackageCheck
} from "lucide-react";
import { PRODUCTS, PRODUCT_CATEGORIES, Product } from "../data/products";

export default function Products() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All Categories");
  const [selectedForm, setSelectedForm] = useState<string>("All Forms");
  const [sortBy, setSortBy] = useState<"name" | "price-asc" | "price-desc" | "mrp-desc">("name");
  const [viewMode, setViewMode] = useState<"grid" | "table">("grid");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [inquiryQty, setInquiryQty] = useState<number>(10);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Search filter
      const matchesSearch =
        product.brandName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.strength.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (product.mfg && product.mfg.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (product.division && product.division.toLowerCase().includes(searchQuery.toLowerCase()));

      // Category filter
      const matchesCategory =
        selectedCategory === "All Categories" || product.category === selectedCategory;

      // Form filter
      const matchesForm = selectedForm === "All Forms" || product.form === selectedForm;

      return matchesSearch && matchesCategory && matchesForm;
    }).sort((a, b) => {
      if (sortBy === "name") {
        return a.brandName.localeCompare(b.brandName);
      } else if (sortBy === "price-asc") {
        return a.wholesalePrice - b.wholesalePrice;
      } else if (sortBy === "price-desc") {
        return b.wholesalePrice - a.wholesalePrice;
      } else if (sortBy === "mrp-desc") {
        return b.mrp - a.mrp;
      }
      return 0;
    });
  }, [searchQuery, selectedCategory, selectedForm, sortBy]);

  // Form options
  const formOptions = ["All Forms", "Injection", "Bottle", "Tablet", "Capsule", "Cream", "Infusion Pen"];

  const handleWhatsAppOrder = (product: Product, quantity: number) => {
    const text = `Hello RS Pharma, I would like to place an order inquiry for:\n\n*Product:* ${product.brandName}\n*Formulation:* ${product.description}\n*Packaging:* ${product.packaging}\n*Quantity:* ${quantity} units\n*Wholesale Price:* ₹${product.wholesalePrice} / unit (+${product.gstPct}% GST)\n\nPlease confirm availability and dispatch timeline.`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/918810660831?text=${encodedText}`, "_blank");
  };

  return (
    <motion.div
      id="products-page-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12"
    >
      {/* 1. HERO HEADER */}
      <section id="products-hero-section" className="bg-harmony-card border border-harmony-teal/20 rounded-3xl p-6 sm:p-10 md:p-12 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-harmony-turquoise/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 space-y-6 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-harmony-cream border border-harmony-teal/25 text-primary rounded-full text-xs font-bold uppercase tracking-wider shadow-2xs">
            <Pill className="w-4 h-4 text-primary animate-pulse" />
            <span>WHO-GDP Compliant Directory</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-harmony-dark tracking-tight font-display leading-tight">
            Pharmaceutical Product Catalog
          </h1>

          <p className="text-harmony-dark/85 text-sm sm:text-base leading-relaxed font-normal">
            Explore our complete portfolio of authentic, temperature-monitored pharmaceutical formulations manufactured by R S Pharma and Senores Pharmaceuticals Limited. Designed for hospitals, clinics, and accredited healthcare distributors.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
            <div className="bg-harmony-bg/80 p-3.5 rounded-2xl border border-harmony-teal/15 flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-primary shrink-0" />
              <div>
                <p className="text-xs font-bold text-harmony-dark font-display">100% Genuine</p>
                <p className="text-[10px] text-harmony-dark/70">WHO-GMP Audited</p>
              </div>
            </div>

            <div className="bg-harmony-bg/80 p-3.5 rounded-2xl border border-harmony-teal/15 flex items-center gap-3">
              <Tag className="w-5 h-5 text-primary shrink-0" />
              <div>
                <p className="text-xs font-bold text-harmony-dark font-display">Wholesale Rates</p>
                <p className="text-[10px] text-harmony-dark/70">Direct Sourcing</p>
              </div>
            </div>

            <div className="bg-harmony-bg/80 p-3.5 rounded-2xl border border-harmony-teal/15 flex items-center gap-3 col-span-2 sm:col-span-1">
              <PackageCheck className="w-5 h-5 text-primary shrink-0" />
              <div>
                <p className="text-xs font-bold text-harmony-dark font-display">{PRODUCTS.length}+ Products</p>
                <p className="text-[10px] text-harmony-dark/70">Ready Stock Depot</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SEARCH & CONTROLS TOOLBAR */}
      <section id="products-filter-toolbar" className="bg-harmony-card border border-harmony-teal/15 rounded-2xl p-4 sm:p-6 shadow-xs space-y-4">
        {/* Search Input Row */}
        <div className="flex flex-col lg:flex-row items-center gap-4 justify-between">
          <div className="relative w-full lg:w-96">
            <Search className="w-5 h-5 text-harmony-dark/40 absolute left-3.5 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by Brand, Formulation, or Strength..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-10 py-2.5 bg-harmony-bg/80 border border-harmony-teal/20 rounded-xl text-sm text-harmony-dark placeholder-harmony-dark/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-harmony-dark/40 hover:text-harmony-dark"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Controls: Form Filter, Sorting, View Mode Switcher */}
          <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto justify-between lg:justify-end">
            {/* Form Filter */}
            <select
              value={selectedForm}
              onChange={(e) => setSelectedForm(e.target.value)}
              className="px-3.5 py-2.5 bg-harmony-bg/80 border border-harmony-teal/20 rounded-xl text-xs font-semibold text-harmony-dark focus:outline-none focus:border-primary cursor-pointer"
            >
              {formOptions.map((f) => (
                <option key={f} value={f}>
                  {f}
                </option>
              ))}
            </select>

            {/* Sort Filter */}
            <div className="flex items-center gap-1.5 bg-harmony-bg/80 border border-harmony-teal/20 rounded-xl px-3 py-1.5">
              <ArrowUpDown className="w-3.5 h-3.5 text-harmony-dark/50" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-transparent text-xs font-semibold text-harmony-dark focus:outline-none cursor-pointer"
              >
                <option value="name">Sort: Brand A-Z</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="mrp-desc">MRP: Highest First</option>
              </select>
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center bg-harmony-bg/80 border border-harmony-teal/20 rounded-xl p-1 gap-1">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-1.5 rounded-lg text-xs font-bold transition-all ${
                  viewMode === "grid"
                    ? "bg-primary text-white shadow-xs"
                    : "text-harmony-dark/60 hover:text-harmony-dark"
                }`}
                title="Grid View"
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode("table")}
                className={`p-1.5 rounded-lg text-xs font-bold transition-all ${
                  viewMode === "table"
                    ? "bg-primary text-white shadow-xs"
                    : "text-harmony-dark/60 hover:text-harmony-dark"
                }`}
                title="Table View"
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none pt-2 border-t border-harmony-teal/10">
          {PRODUCT_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                selectedCategory === cat
                  ? "bg-primary text-white shadow-2xs"
                  : "bg-harmony-bg text-harmony-dark/70 hover:bg-harmony-cream hover:text-primary border border-harmony-teal/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* 3. RESULTS SUMMARY */}
      <div className="flex items-center justify-between text-xs text-harmony-dark/70 px-1">
        <span>
          Showing <strong className="text-harmony-dark font-bold">{filteredProducts.length}</strong> of{" "}
          <strong className="text-harmony-dark font-bold">{PRODUCTS.length}</strong> products
        </span>
        {searchQuery || selectedCategory !== "All Categories" || selectedForm !== "All Forms" ? (
          <button
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("All Categories");
              setSelectedForm("All Forms");
            }}
            className="text-primary hover:underline font-bold"
          >
            Reset Filters
          </button>
        ) : null}
      </div>

      {/* 4. PRODUCT DISPLAY (GRID OR TABLE) */}
      {filteredProducts.length === 0 ? (
        <div className="bg-harmony-card border border-harmony-teal/15 rounded-3xl p-12 text-center space-y-4">
          <Pill className="w-12 h-12 text-harmony-dark/30 mx-auto" />
          <h3 className="text-xl font-bold text-harmony-dark font-display">No products found</h3>
          <p className="text-xs text-harmony-dark/70 max-w-md mx-auto">
            We couldn't find any medicine matching your search criteria. Try modifying your search keywords or resetting category filters.
          </p>
          <button
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("All Categories");
              setSelectedForm("All Forms");
            }}
            className="px-5 py-2.5 bg-primary text-white text-xs font-bold rounded-xl shadow-xs hover:bg-primary-hover transition-colors"
          >
            Reset All Filters
          </button>
        </div>
      ) : viewMode === "grid" ? (
        /* GRID VIEW */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => {
            const savingsPct = Math.round(((product.mrp - product.wholesalePrice) / product.mrp) * 100);

            return (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-harmony-card border border-harmony-teal/15 hover:border-harmony-teal/35 rounded-2xl p-5 shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Highlight top bar if featured */}
                {product.isFeatured && (
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-harmony-dark via-primary to-harmony-turquoise" />
                )}

                <div className="space-y-3">
                  {/* Category & Badge */}
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="px-2.5 py-0.5 bg-harmony-bg text-primary rounded-md font-bold uppercase tracking-wider border border-harmony-teal/10">
                      {product.category}
                    </span>
                    {product.badge && (
                      <span className="px-2 py-0.5 bg-amber-100 text-amber-800 font-bold rounded-md text-[10px] uppercase tracking-wider">
                        {product.badge}
                      </span>
                    )}
                  </div>

                  {/* Product Title */}
                  <div>
                    <Link
                      to={`/product/${product.id}`}
                      className="text-base font-extrabold text-harmony-dark font-display group-hover:text-primary transition-colors leading-snug block"
                    >
                      {product.brandName}
                    </Link>
                    <p className="text-xs text-harmony-dark/80 font-normal line-clamp-2 mt-1">
                      {product.description}
                    </p>
                  </div>

                  {/* Product Specs Pill Grid */}
                  <div className="grid grid-cols-2 gap-2 text-xs pt-1">
                    <div className="bg-harmony-bg/60 p-2 rounded-lg border border-harmony-teal/10">
                      <span className="text-[10px] text-harmony-dark/60 block font-semibold uppercase">Strength</span>
                      <span className="font-bold text-harmony-dark">{product.strength}</span>
                    </div>
                    <div className="bg-harmony-bg/60 p-2 rounded-lg border border-harmony-teal/10">
                      <span className="text-[10px] text-harmony-dark/60 block font-semibold uppercase">Packaging</span>
                      <span className="font-bold text-harmony-dark truncate block">{product.packaging}</span>
                    </div>
                  </div>

                  {/* Pricing Box */}
                  <div className="bg-harmony-cream/60 border border-harmony-teal/20 rounded-xl p-3 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-harmony-dark/60 block font-semibold uppercase">Wholesale Price</span>
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-lg font-black text-primary">₹{product.wholesalePrice}</span>
                        <span className="text-[10px] text-harmony-dark/60">+{product.gstPct}% GST</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] text-harmony-dark/50 block line-through">MRP: ₹{product.mrp}</span>
                      {savingsPct > 0 && (
                        <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-1.5 py-0.5 rounded">
                          Save {savingsPct}%
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-4 mt-3 border-t border-harmony-teal/10 flex items-center gap-2">
                  <Link
                    to={`/product/${product.id}`}
                    className="flex-1 py-2 px-3 bg-harmony-bg hover:bg-harmony-teal/15 text-harmony-dark border border-harmony-teal/20 rounded-xl text-xs font-bold transition-all text-center cursor-pointer"
                  >
                    View Details
                  </Link>
                  <button
                    onClick={() => handleWhatsAppOrder(product, 10)}
                    className="flex-1 py-2 px-3 bg-primary hover:bg-primary-hover text-white rounded-xl text-xs font-bold transition-all text-center flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Inquire</span>
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      ) : (
        /* TABLE VIEW FOR WHOLESALE BUYERS */
        <div className="bg-harmony-card border border-harmony-teal/15 rounded-2xl overflow-hidden shadow-xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-harmony-dark text-white font-display font-semibold uppercase tracking-wider text-[11px]">
                <tr>
                  <th className="p-4">Brand Name</th>
                  <th className="p-4">Active Formulation</th>
                  <th className="p-4">Strength</th>
                  <th className="p-4">Packaging</th>
                  <th className="p-4 text-right">MRP (₹)</th>
                  <th className="p-4 text-right">Wholesale Rate</th>
                  <th className="p-4 text-center">GST</th>
                  <th className="p-4 text-center">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-harmony-teal/10">
                {filteredProducts.map((product) => (
                  <tr key={product.id} className="hover:bg-harmony-bg/60 transition-colors">
                    <td className="p-4 font-bold text-harmony-dark font-display">
                      <Link to={`/product/${product.id}`} className="hover:text-primary transition-colors">
                        {product.brandName}
                      </Link>
                      {product.badge && (
                        <span className="ml-2 px-1.5 py-0.2 bg-amber-100 text-amber-800 rounded text-[9px] font-sans">
                          {product.badge}
                        </span>
                      )}
                    </td>
                    <td className="p-4 text-harmony-dark/80 max-w-xs">{product.description}</td>
                    <td className="p-4 font-semibold text-harmony-dark">{product.strength}</td>
                    <td className="p-4 text-harmony-dark/80">{product.packaging}</td>
                    <td className="p-4 text-right text-harmony-dark/50 line-through">₹{product.mrp}</td>
                    <td className="p-4 text-right font-black text-primary text-sm">₹{product.wholesalePrice}</td>
                    <td className="p-4 text-center font-medium text-harmony-dark">{product.gstPct}%</td>
                    <td className="p-4 text-center">
                      <div className="flex items-center justify-center gap-1.5">
                        <Link
                          to={`/product/${product.id}`}
                          className="px-2.5 py-1 bg-harmony-bg hover:bg-harmony-teal/20 text-harmony-dark border border-harmony-teal/20 rounded-lg font-bold text-[11px]"
                        >
                          View
                        </Link>
                        <button
                          onClick={() => handleWhatsAppOrder(product, 10)}
                          className="px-3 py-1.5 bg-primary hover:bg-primary-hover text-white rounded-lg font-bold text-[11px] inline-flex items-center gap-1 cursor-pointer shadow-2xs"
                        >
                          <MessageSquare className="w-3 h-3" />
                          <span>Order</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* 5. PRODUCT SPECIFICATION & INQUIRY MODAL */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-harmony-card border border-harmony-teal/20 rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl space-y-6 relative max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-5 right-5 p-2 text-harmony-dark/40 hover:text-harmony-dark rounded-full hover:bg-harmony-bg transition-all"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-2">
                <span className="px-3 py-1 bg-harmony-cream border border-harmony-teal/20 text-primary rounded-full text-xs font-bold uppercase tracking-wider">
                  {selectedProduct.category}
                </span>
                <h3 className="text-2xl font-extrabold text-harmony-dark font-display">
                  {selectedProduct.brandName}
                </h3>
                <p className="text-xs text-harmony-dark/80 font-normal">
                  {selectedProduct.description}
                </p>
              </div>

              {/* Specifications List */}
              <div className="space-y-2.5 bg-harmony-bg/80 border border-harmony-teal/15 rounded-2xl p-4 text-xs">
                <div className="flex justify-between py-1 border-b border-harmony-teal/10">
                  <span className="text-harmony-dark/60 font-medium">Strength:</span>
                  <span className="font-bold text-harmony-dark">{selectedProduct.strength}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-harmony-teal/10">
                  <span className="text-harmony-dark/60 font-medium">Packaging Unit:</span>
                  <span className="font-bold text-harmony-dark">{selectedProduct.packaging}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-harmony-teal/10">
                  <span className="text-harmony-dark/60 font-medium">Country of Origin:</span>
                  <span className="font-bold text-harmony-dark">{selectedProduct.countryOfOrigin}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-harmony-teal/10">
                  <span className="text-harmony-dark/60 font-medium">Manufacturer:</span>
                  <span className="font-bold text-harmony-dark">{selectedProduct.mfg}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-harmony-teal/10">
                  <span className="text-harmony-dark/60 font-medium">Maximum Retail Price (MRP):</span>
                  <span className="font-bold text-harmony-dark/60 line-through">₹{selectedProduct.mrp}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-harmony-dark/80 font-bold">RS Pharma Wholesale Rate:</span>
                  <span className="font-black text-primary text-sm">₹{selectedProduct.wholesalePrice} (+{selectedProduct.gstPct}% GST)</span>
                </div>
              </div>

              {/* Quantity Selector for Bulk Orders */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-harmony-dark block">Estimated Wholesale Units:</label>
                <div className="flex items-center gap-3">
                  <input
                    type="number"
                    min="1"
                    value={inquiryQty}
                    onChange={(e) => setInquiryQty(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-24 px-3 py-2 bg-harmony-bg border border-harmony-teal/20 rounded-xl text-xs font-bold text-harmony-dark focus:outline-none focus:border-primary"
                  />
                  <span className="text-xs text-harmony-dark/70">
                    Est. Total: <strong className="text-primary font-black">₹{(selectedProduct.wholesalePrice * inquiryQty).toLocaleString()}</strong> (+GST)
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 pt-2">
                <button
                  onClick={() => handleWhatsAppOrder(selectedProduct, inquiryQty)}
                  className="flex-1 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send WhatsApp Inquiry</span>
                </button>
                <a
                  href="tel:+918810660831"
                  className="py-3 px-4 bg-harmony-bg border border-harmony-teal/20 text-harmony-dark hover:bg-harmony-cream font-bold text-xs rounded-xl flex items-center justify-center gap-2 transition-all"
                >
                  <Phone className="w-4 h-4 text-primary" />
                  <span>Call Desk</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 6. WHOLESALE PROCUREMENT FOOTER BANNER */}
      <section id="bulk-procurement-banner" className="bg-harmony-dark text-white rounded-3xl p-8 sm:p-10 shadow-lg relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-harmony-turquoise/20 text-harmony-cream rounded-full text-xs font-bold uppercase tracking-wider">
            <Building2 className="w-3.5 h-3.5 text-harmony-mint" />
            <span>Hospital & Institutional Procurement</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold font-display">
            Need Bulk Contract Rates or Custom Formulations?
          </h3>
          <p className="text-slate-300 text-xs sm:text-sm max-w-xl">
            Contact our dedicated Gwalior desk for formal price quotations, regulatory drug license verifications, and regional dispatch timelines.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
          <a
            href="tel:+918810660831"
            className="px-6 py-3.5 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-xl text-xs font-bold shadow-md hover:from-pink-600 hover:to-rose-600 text-center transition-all cursor-pointer"
          >
            Call +91 88106 60831
          </a>
        </div>
      </section>
    </motion.div>
  );
}
