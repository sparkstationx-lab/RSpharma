import React, { useState, useMemo } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import {
  ArrowLeft,
  ChevronRight,
  Pill,
  ShieldCheck,
  Award,
  Truck,
  MessageSquare,
  Phone,
  CheckCircle2,
  Building2,
  Package,
  FileText,
  Tag,
  Clock,
  Zap,
  Globe,
  Share2,
  Check,
  AlertCircle,
  HeartPulse,
  Stethoscope
} from "lucide-react";
import { PRODUCTS, Product } from "../data/products";
import { TreatmentInfoCard } from "../components/TreatmentInfoCard";
import { getTreatmentInfo } from "../utils/treatmentInfo";

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Find product by id
  const product = useMemo(() => {
    return PRODUCTS.find((p) => p.id === id);
  }, [id]);

  // Quantity counter state
  const [quantity, setQuantity] = useState<number>(product ? Math.max(product.minOrderQuantity, 10) : 10);
  const [copiedLink, setCopiedLink] = useState(false);

  // Recommendations: 2-3 related products from the same category
  const relatedProducts = useMemo(() => {
    if (!product) return [];

    // First try same category, excluding current product
    const sameCategory = PRODUCTS.filter(
      (p) => p.category === product.category && p.id !== product.id
    );

    // If we have enough, return up to 3
    if (sameCategory.length >= 3) {
      return sameCategory.slice(0, 3);
    }

    // If less than 3, backfill with featured or other popular items
    const otherProducts = PRODUCTS.filter(
      (p) => p.id !== product.id && !sameCategory.some((sc) => sc.id === p.id)
    );

    return [...sameCategory, ...otherProducts].slice(0, 3);
  }, [product]);

  // Handle WhatsApp Order Direct link
  const handleWhatsAppOrder = (targetProduct: Product, orderQty: number) => {
    const subtotal = targetProduct.wholesalePrice * orderQty;
    const gstAmount = subtotal * (targetProduct.gstPct / 100);
    const grandTotal = Math.round(subtotal + gstAmount);

    const text = `Hello RS Pharma, I would like to place an order inquiry for:\n\n*Product:* ${targetProduct.brandName}\n*Formulation:* ${targetProduct.description}\n*Strength:* ${targetProduct.strength}\n*Packaging:* ${targetProduct.packaging}\n*Quantity:* ${orderQty} units\n*Wholesale Price:* ₹${targetProduct.wholesalePrice} / unit (+${targetProduct.gstPct}% GST)\n*Estimated Total:* ₹${grandTotal.toLocaleString("en-IN")}\n\nPlease confirm stock availability and dispatch timeline.`;
    
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/918810660831?text=${encodedText}`, "_blank");
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  // Handle case where product is not found
  if (!product) {
    return (
      <div className="min-h-screen bg-grid-pattern pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center space-y-6">
        <div className="p-4 bg-amber-50 border border-amber-200 text-amber-800 rounded-2xl max-w-md mx-auto inline-flex items-center gap-2">
          <AlertCircle className="w-5 h-5 shrink-0" />
          <span className="text-xs font-bold">Product ID "{id}" was not found in catalog.</span>
        </div>
        <h1 className="text-3xl font-extrabold text-harmony-dark font-display">Requested Product Not Found</h1>
        <p className="text-sm text-harmony-dark/70 max-w-lg mx-auto">
          The formulation or brand you are looking for may have been updated or renamed in our wholesale directory.
        </p>
        <Link
          to="/products"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-hover text-white font-bold rounded-xl text-xs transition-all shadow-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Product Catalog</span>
        </Link>
      </div>
    );
  }

  // Savings Calculations
  const savingsPerUnit = product.mrp - product.wholesalePrice;
  const savingsPct = Math.round((savingsPerUnit / product.mrp) * 100);
  const subtotal = product.wholesalePrice * quantity;
  const gstAmount = subtotal * (product.gstPct / 100);
  const totalEstimatedCost = Math.round(subtotal + gstAmount);
  const treatment = getTreatmentInfo(product);

  return (
    <motion.div
      id="product-detail-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      className="min-h-screen bg-grid-pattern pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10"
    >
      {/* 1. BREADCRUMBS & TOP NAVIGATION */}
      <nav id="product-detail-breadcrumbs" className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-xs text-harmony-dark/70 font-medium">
          <Link to="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-harmony-dark/40" />
          <Link to="/products" className="hover:text-primary transition-colors">
            Products Catalog
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-harmony-dark/40" />
          <span className="text-harmony-dark font-bold truncate max-w-[200px] sm:max-w-xs">
            {product.brandName}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleShare}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-harmony-card hover:bg-harmony-bg text-harmony-dark border border-harmony-teal/20 rounded-xl text-xs font-bold transition-all cursor-pointer shadow-2xs"
            title="Share product link"
          >
            {copiedLink ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-emerald-700">Link Copied!</span>
              </>
            ) : (
              <>
                <Share2 className="w-3.5 h-3.5 text-primary" />
                <span>Share</span>
              </>
            )}
          </button>

          <Link
            to="/products"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-harmony-card hover:bg-harmony-bg text-harmony-dark border border-harmony-teal/20 rounded-xl text-xs font-bold transition-all shadow-2xs"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-harmony-dark" />
            <span>All Products</span>
          </Link>
        </div>
      </nav>

      {/* 2. MAIN PRODUCT OVERVIEW CARD */}
      <section id="product-main-details" className="bg-harmony-card border border-harmony-teal/20 rounded-3xl p-6 sm:p-8 md:p-10 shadow-sm relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10">
          
          {/* LEFT COLUMN: Visual Badge, Manufacturer Specs & Key Attributes */}
          <div className="lg:col-span-5 space-y-6">
            {/* Form Visual Box */}
            <div className="bg-gradient-to-br from-harmony-dark via-slate-800 to-harmony-dark text-white rounded-2xl p-6 sm:p-8 shadow-md relative overflow-hidden flex flex-col justify-between min-h-[260px] border border-white/10">
              <div className="absolute top-0 right-0 w-48 h-48 bg-harmony-turquoise/15 rounded-full blur-2xl pointer-events-none" />
              
              <div className="space-y-4 relative z-10">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-white/10 backdrop-blur-md text-harmony-turquoise border border-white/20 rounded-full text-[11px] font-bold uppercase tracking-wider">
                    {product.form} Formulation
                  </span>
                  {product.badge && (
                    <span className="px-2.5 py-0.5 bg-amber-400 text-amber-950 rounded-md text-[10px] font-black uppercase tracking-wider shadow-2xs">
                      {product.badge}
                    </span>
                  )}
                </div>

                <div className="py-2">
                  <div className="p-3 bg-white/10 rounded-2xl inline-block border border-white/15 mb-3">
                    <Pill className="w-8 h-8 text-harmony-mint" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-display leading-tight">
                    {product.brandName}
                  </h2>
                  <p className="text-xs text-harmony-cream/80 mt-1 font-mono tracking-wide">
                    {product.strength} • {product.packaging}
                  </p>
                </div>
              </div>

              {/* Manufacturer & Division Badge */}
              <div className="pt-4 border-t border-white/10 relative z-10 flex items-center justify-between text-xs text-harmony-cream/90">
                <div className="space-y-0.5">
                  <span className="text-[10px] uppercase tracking-wider text-harmony-turquoise/80 block font-semibold">
                    Manufacturer / Licensee
                  </span>
                  <span className="font-bold text-white block truncate max-w-[240px]">
                    {product.mfg}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] uppercase tracking-wider text-harmony-turquoise/80 block font-semibold">
                    Division
                  </span>
                  <span className="font-bold text-harmony-mint">{product.division}</span>
                </div>
              </div>
            </div>

            {/* Quality & Storage Assurances */}
            <div className="bg-harmony-bg/80 border border-harmony-teal/15 rounded-2xl p-4 sm:p-5 space-y-3">
              <h4 className="text-xs font-bold text-harmony-dark font-display uppercase tracking-wider flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Quality & Handling Assurance</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                <div className="flex items-center gap-2 p-2.5 bg-white rounded-xl border border-harmony-teal/10">
                  <Truck className="w-4 h-4 text-primary shrink-0" />
                  <div>
                    <strong className="block text-harmony-dark font-bold text-[11px]">Cold Chain Verified</strong>
                    <span className="text-[10px] text-harmony-dark/70">WHO-GDP Temperature Logged</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 p-2.5 bg-white rounded-xl border border-harmony-teal/10">
                  <Award className="w-4 h-4 text-primary shrink-0" />
                  <div>
                    <strong className="block text-harmony-dark font-bold text-[11px]">Direct Factory Supply</strong>
                    <span className="text-[10px] text-harmony-dark/70">100% Genuine Batch CoA</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 p-2.5 bg-white rounded-xl border border-harmony-teal/10">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <div>
                    <strong className="block text-harmony-dark font-bold text-[11px]">CDSCO Licensed</strong>
                    <span className="text-[10px] text-harmony-dark/70">Government Approved Batch</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 p-2.5 bg-white rounded-xl border border-harmony-teal/10">
                  <Zap className="w-4 h-4 text-primary shrink-0" />
                  <div>
                    <strong className="block text-harmony-dark font-bold text-[11px]">Express Dispatch</strong>
                    <span className="text-[10px] text-harmony-dark/70">24-48h Emergency Shipping</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Product Attributes, Pricing, & Interactive Order Calculator */}
          <div className="lg:col-span-7 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              {/* Category Badge & Country */}
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="px-3.5 py-1 bg-harmony-cream text-primary border border-harmony-teal/25 rounded-full text-xs font-bold uppercase tracking-wider">
                  {product.category}
                </span>
                <span className="text-xs text-harmony-dark/70 font-semibold flex items-center gap-1">
                  <Globe className="w-3.5 h-3.5 text-harmony-mint" />
                  Made in {product.countryOfOrigin}
                </span>
              </div>

              {/* Title & Description */}
              <div className="space-y-2.5">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-harmony-dark font-display leading-snug">
                  {product.brandName}
                </h1>
                <p className="text-sm text-harmony-dark/85 leading-relaxed font-normal">
                  {product.description}
                </p>

                {/* Treatment Indication Quick Badge */}
                <div className="p-3 bg-emerald-50/90 border border-emerald-200/80 rounded-xl flex items-start gap-2 text-xs">
                  <HeartPulse className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] uppercase tracking-wider font-extrabold text-emerald-800 block">
                      Primary Medical Indication / Treatment:
                    </span>
                    <span className="font-bold text-emerald-950 block mt-0.5">
                      {treatment.primaryCondition}
                    </span>
                  </div>
                </div>
              </div>

              {/* Specifications Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="bg-harmony-bg/80 p-3 rounded-xl border border-harmony-teal/15">
                  <span className="text-[10px] text-harmony-dark/60 block font-semibold uppercase">Strength</span>
                  <span className="text-xs font-extrabold text-harmony-dark">{product.strength}</span>
                </div>
                <div className="bg-harmony-bg/80 p-3 rounded-xl border border-harmony-teal/15">
                  <span className="text-[10px] text-harmony-dark/60 block font-semibold uppercase">Packaging</span>
                  <span className="text-xs font-extrabold text-harmony-dark truncate block">{product.packaging}</span>
                </div>
                <div className="bg-harmony-bg/80 p-3 rounded-xl border border-harmony-teal/15">
                  <span className="text-[10px] text-harmony-dark/60 block font-semibold uppercase">Min Order (MOQ)</span>
                  <span className="text-xs font-extrabold text-harmony-dark">{product.minOrderQuantity} Unit(s)</span>
                </div>
                <div className="bg-harmony-bg/80 p-3 rounded-xl border border-harmony-teal/15">
                  <span className="text-[10px] text-harmony-dark/60 block font-semibold uppercase">Applicable GST</span>
                  <span className="text-xs font-extrabold text-harmony-dark">{product.gstPct}% Tax</span>
                </div>
              </div>

              {/* Wholesale Pricing Hero Box */}
              <div className="bg-gradient-to-r from-harmony-cream/80 via-white to-harmony-cream/80 border border-harmony-teal/25 rounded-2xl p-5 shadow-2xs space-y-3">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <span className="text-xs font-bold text-harmony-dark/70 uppercase tracking-wider block">
                      Wholesale Distributor Price
                    </span>
                    <div className="flex items-baseline gap-2 mt-0.5">
                      <span className="text-3xl font-black text-primary font-display">
                        ₹{product.wholesalePrice.toLocaleString("en-IN")}
                      </span>
                      <span className="text-xs font-medium text-harmony-dark/70">
                        / unit (+{product.gstPct}% GST)
                      </span>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="text-xs text-harmony-dark/50 block line-through font-medium">
                      MRP: ₹{product.mrp.toLocaleString("en-IN")}
                    </span>
                    {savingsPct > 0 && (
                      <span className="inline-block mt-1 text-xs font-bold text-emerald-800 bg-emerald-100 border border-emerald-200 px-2.5 py-1 rounded-md">
                        Save ₹{savingsPerUnit.toLocaleString("en-IN")} ({savingsPct}% Off)
                      </span>
                    )}
                  </div>
                </div>

                <p className="text-[11px] text-harmony-dark/70 font-medium pt-1 border-t border-harmony-teal/10">
                  ⚡ Institutional discounts and hospital contract bulk pricing available for bulk shipments.
                </p>
              </div>

              {/* Order Quantity Calculator */}
              <div className="bg-harmony-bg/90 border border-harmony-teal/20 rounded-2xl p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <label htmlFor="quantity-input" className="text-xs font-bold text-harmony-dark uppercase tracking-wider font-display flex items-center gap-1.5">
                    <Package className="w-4 h-4 text-primary" />
                    <span>Select Inquiry Quantity</span>
                  </label>
                  <span className="text-xs font-bold text-primary">
                    Est. Total: ₹{totalEstimatedCost.toLocaleString("en-IN")}
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <div className="flex items-center border border-harmony-teal/25 rounded-xl bg-white overflow-hidden shadow-2xs">
                    <button
                      type="button"
                      onClick={() => setQuantity((q) => Math.max(product.minOrderQuantity, q - 5))}
                      className="px-3.5 py-2 text-harmony-dark hover:bg-harmony-bg font-bold transition-colors"
                    >
                      -
                    </button>
                    <input
                      id="quantity-input"
                      type="number"
                      min={product.minOrderQuantity}
                      value={quantity}
                      onChange={(e) => setQuantity(Math.max(product.minOrderQuantity, parseInt(e.target.value) || 1))}
                      className="w-16 text-center text-xs font-bold text-harmony-dark border-x border-harmony-teal/15 py-2 focus:outline-none"
                    />
                    <button
                      type="button"
                      onClick={() => setQuantity((q) => q + 5)}
                      className="px-3.5 py-2 text-harmony-dark hover:bg-harmony-bg font-bold transition-colors"
                    >
                      +
                    </button>
                  </div>

                  {/* Preset Buttons */}
                  <div className="flex items-center gap-1.5 flex-wrap text-xs font-bold">
                    {[10, 25, 50, 100].map((preset) => (
                      <button
                        key={preset}
                        type="button"
                        onClick={() => setQuantity(preset)}
                        className={`px-3 py-1.5 rounded-lg border transition-all cursor-pointer ${
                          quantity === preset
                            ? "bg-primary text-white border-primary shadow-2xs"
                            : "bg-white text-harmony-dark border-harmony-teal/20 hover:border-harmony-teal/40"
                        }`}
                      >
                        {preset} Units
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* ACTION BUTTONS */}
            <div className="pt-4 border-t border-harmony-teal/15 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => handleWhatsAppOrder(product, quantity)}
                className="py-3.5 px-5 bg-primary hover:bg-primary-hover text-white rounded-xl text-xs font-extrabold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer group"
              >
                <MessageSquare className="w-4 h-4 transform group-hover:scale-110 transition-transform" />
                <span>Inquire Order on WhatsApp</span>
              </button>

              <a
                href="tel:+918810660831"
                className="py-3.5 px-5 bg-harmony-card hover:bg-harmony-bg text-harmony-dark border border-harmony-teal/25 rounded-xl text-xs font-extrabold transition-all flex items-center justify-center gap-2 text-center"
              >
                <Phone className="w-4 h-4 text-primary" />
                <span>Call Wholesale Desk</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. DEDICATED TREATMENT INFO CARD */}
      <TreatmentInfoCard product={product} />

      {/* 4. FULL SPECIFICATIONS TABLE */}
      <section id="product-full-specifications" className="bg-harmony-card border border-harmony-teal/15 rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex items-center gap-2 border-b border-harmony-teal/15 pb-4">
          <FileText className="w-5 h-5 text-primary" />
          <h3 className="text-xl font-extrabold text-harmony-dark font-display">
            Technical Specification & Drug Profile
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="space-y-2">
            <div className="flex justify-between py-2 px-3 bg-harmony-bg/60 rounded-lg">
              <span className="text-harmony-dark/60 font-semibold">Brand Name:</span>
              <span className="font-extrabold text-harmony-dark font-display">{product.brandName}</span>
            </div>
            <div className="flex justify-between py-2 px-3 bg-harmony-bg/60 rounded-lg">
              <span className="text-harmony-dark/60 font-semibold">Active Formulation:</span>
              <span className="font-bold text-harmony-dark text-right max-w-xs">{product.description}</span>
            </div>
            <div className="flex justify-between py-2 px-3 bg-harmony-bg/60 rounded-lg">
              <span className="text-harmony-dark/60 font-semibold">Target Condition:</span>
              <span className="font-bold text-primary text-right max-w-xs">{treatment.primaryCondition}</span>
            </div>
            <div className="flex justify-between py-2 px-3 bg-harmony-bg/60 rounded-lg">
              <span className="text-harmony-dark/60 font-semibold">Strength:</span>
              <span className="font-bold text-harmony-dark">{product.strength}</span>
            </div>
            <div className="flex justify-between py-2 px-3 bg-harmony-bg/60 rounded-lg">
              <span className="text-harmony-dark/60 font-semibold">Packaging Unit:</span>
              <span className="font-bold text-harmony-dark">{product.packaging}</span>
            </div>
            <div className="flex justify-between py-2 px-3 bg-harmony-bg/60 rounded-lg">
              <span className="text-harmony-dark/60 font-semibold">Form Factor:</span>
              <span className="font-bold text-harmony-dark">{product.form}</span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between py-2 px-3 bg-harmony-bg/60 rounded-lg">
              <span className="text-harmony-dark/60 font-semibold">Manufacturer:</span>
              <span className="font-bold text-harmony-dark text-right max-w-xs">{product.mfg}</span>
            </div>
            <div className="flex justify-between py-2 px-3 bg-harmony-bg/60 rounded-lg">
              <span className="text-harmony-dark/60 font-semibold">Division:</span>
              <span className="font-bold text-harmony-dark">{product.division}</span>
            </div>
            <div className="flex justify-between py-2 px-3 bg-harmony-bg/60 rounded-lg">
              <span className="text-harmony-dark/60 font-semibold">Category:</span>
              <span className="font-bold text-primary">{product.category}</span>
            </div>
            <div className="flex justify-between py-2 px-3 bg-harmony-bg/60 rounded-lg">
              <span className="text-harmony-dark/60 font-semibold">GST Rate:</span>
              <span className="font-bold text-harmony-dark">{product.gstPct}%</span>
            </div>
            <div className="flex justify-between py-2 px-3 bg-harmony-bg/60 rounded-lg">
              <span className="text-harmony-dark/60 font-semibold">Country of Origin:</span>
              <span className="font-bold text-harmony-dark">{product.countryOfOrigin}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. RECOMMENDED RELATED PRODUCTS SECTION */}
      <section id="product-recommendations-section" className="space-y-6 pt-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 border-b border-harmony-teal/15 pb-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-harmony-cream border border-harmony-teal/20 text-primary rounded-full text-[11px] font-bold uppercase tracking-wider mb-2">
              <Tag className="w-3.5 h-3.5" />
              <span>Similar Formulations</span>
            </div>
            <h3 className="text-2xl font-extrabold text-harmony-dark font-display">
              Recommended in {product.category}
            </h3>
            <p className="text-xs text-harmony-dark/70 mt-0.5">
              Explore related critical care therapeutics with matching therapeutic indication.
            </p>
          </div>

          <Link
            to="/products"
            className="text-xs font-bold text-primary hover:text-primary-hover flex items-center gap-1 group shrink-0"
          >
            <span>View Full Category</span>
            <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Related Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedProducts.map((relProduct) => {
            const relSavingsPct = Math.round(
              ((relProduct.mrp - relProduct.wholesalePrice) / relProduct.mrp) * 100
            );

            return (
              <motion.div
                key={relProduct.id}
                whileHover={{ y: -4 }}
                className="bg-harmony-card border border-harmony-teal/15 hover:border-harmony-teal/35 rounded-2xl p-5 shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                {relProduct.isFeatured && (
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-harmony-dark via-primary to-harmony-turquoise" />
                )}

                <div className="space-y-3">
                  {/* Category & Badge */}
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="px-2.5 py-0.5 bg-harmony-bg text-primary rounded-md font-bold uppercase tracking-wider border border-harmony-teal/10">
                      {relProduct.category}
                    </span>
                    {relProduct.badge && (
                      <span className="px-2 py-0.5 bg-amber-100 text-amber-800 font-bold rounded-md text-[10px] uppercase tracking-wider">
                        {relProduct.badge}
                      </span>
                    )}
                  </div>

                  {/* Title & Description */}
                  <div>
                    <Link
                      to={`/product/${relProduct.id}`}
                      className="text-base font-extrabold text-harmony-dark font-display group-hover:text-primary transition-colors leading-snug block"
                    >
                      {relProduct.brandName}
                    </Link>
                    <p className="text-xs text-harmony-dark/80 font-normal line-clamp-2 mt-1">
                      {relProduct.description}
                    </p>
                  </div>

                  {/* Specs */}
                  <div className="grid grid-cols-2 gap-2 text-xs pt-1">
                    <div className="bg-harmony-bg/60 p-2 rounded-lg border border-harmony-teal/10">
                      <span className="text-[10px] text-harmony-dark/60 block font-semibold uppercase">
                        Strength
                      </span>
                      <span className="font-bold text-harmony-dark">{relProduct.strength}</span>
                    </div>
                    <div className="bg-harmony-bg/60 p-2 rounded-lg border border-harmony-teal/10">
                      <span className="text-[10px] text-harmony-dark/60 block font-semibold uppercase">
                        Packaging
                      </span>
                      <span className="font-bold text-harmony-dark truncate block">
                        {relProduct.packaging}
                      </span>
                    </div>
                  </div>

                  {/* Pricing Box */}
                  <div className="bg-harmony-cream/60 border border-harmony-teal/20 rounded-xl p-3 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-harmony-dark/60 block font-semibold uppercase">
                        Wholesale Rate
                      </span>
                      <div className="flex items-baseline gap-1">
                        <span className="text-lg font-black text-primary">
                          ₹{relProduct.wholesalePrice}
                        </span>
                        <span className="text-[10px] text-harmony-dark/60">
                          +{relProduct.gstPct}% GST
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] text-harmony-dark/50 block line-through">
                        MRP: ₹{relProduct.mrp}
                      </span>
                      {relSavingsPct > 0 && (
                        <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-1.5 py-0.5 rounded">
                          Save {relSavingsPct}%
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-4 mt-3 border-t border-harmony-teal/10 flex items-center gap-2">
                  <Link
                    to={`/product/${relProduct.id}`}
                    className="flex-1 py-2 px-3 bg-harmony-bg hover:bg-harmony-teal/15 text-harmony-dark border border-harmony-teal/20 rounded-xl text-xs font-bold transition-all text-center"
                  >
                    View Details
                  </Link>
                  <button
                    onClick={() => handleWhatsAppOrder(relProduct, 10)}
                    className="flex-1 py-2 px-3 bg-primary hover:bg-primary-hover text-white rounded-xl text-xs font-bold transition-all text-center flex items-center justify-center gap-1 cursor-pointer shadow-2xs"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Inquire</span>
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </motion.div>
  );
}
