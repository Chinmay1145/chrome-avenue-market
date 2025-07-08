import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { CreditCard, Wallet, Banknote, Smartphone, Clock } from 'lucide-react';
import { formatPrice } from '../data/cars';

interface CheckoutFormProps {
  totalAmount: number;
  onSubmit: (formData: any) => void;
  isProcessing: boolean;
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({ totalAmount, onSubmit, isProcessing }) => {
  const [formData, setFormData] = useState({
    // Personal Details
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    
    // Address
    address: '',
    city: '',
    state: '',
    pincode: '',
    
    // Payment
    paymentMethod: 'card',
    
    // Card Details
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardholderName: '',
    
    // UPI
    upiId: '',
    
    // Net Banking
    bankName: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const formatCardNumber = (value: string) => {
    const cleaned = value.replace(/\s/g, '');
    const match = cleaned.match(/.{1,4}/g);
    return match ? match.join(' ') : '';
  };

  const formatExpiry = (value: string) => {
    const cleaned = value.replace(/\D/g, '');
    if (cleaned.length >= 2) {
      return cleaned.substring(0, 2) + '/' + cleaned.substring(2, 4);
    }
    return cleaned;
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Personal Details */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-foreground">Personal Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="firstName">First Name</Label>
            <Input
              id="firstName"
              value={formData.firstName}
              onChange={(e) => handleInputChange('firstName', e.target.value)}
              required
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="lastName">Last Name</Label>
            <Input
              id="lastName"
              value={formData.lastName}
              onChange={(e) => handleInputChange('lastName', e.target.value)}
              required
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              required
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              required
              className="mt-1"
            />
          </div>
        </div>
      </div>

      {/* Delivery Address */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-foreground">Delivery Address</h3>
        <div className="space-y-4">
          <div>
            <Label htmlFor="address">Address</Label>
            <Input
              id="address"
              value={formData.address}
              onChange={(e) => handleInputChange('address', e.target.value)}
              required
              className="mt-1"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="city">City</Label>
              <Input
                id="city"
                value={formData.city}
                onChange={(e) => handleInputChange('city', e.target.value)}
                required
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="state">State</Label>
              <Input
                id="state"
                value={formData.state}
                onChange={(e) => handleInputChange('state', e.target.value)}
                required
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="pincode">PIN Code</Label>
              <Input
                id="pincode"
                value={formData.pincode}
                onChange={(e) => handleInputChange('pincode', e.target.value)}
                required
                className="mt-1"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Payment Method */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-foreground">Payment Method</h3>
        <RadioGroup
          value={formData.paymentMethod}
          onValueChange={(value) => handleInputChange('paymentMethod', value)}
          className="space-y-3"
        >
          <div className="flex items-center space-x-3 p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors">
            <RadioGroupItem value="card" id="card" />
            <Label htmlFor="card" className="flex items-center gap-2 cursor-pointer flex-1">
              <CreditCard className="w-5 h-5 text-primary" />
              <span>Credit/Debit Card</span>
            </Label>
          </div>
          
          <div className="flex items-center space-x-3 p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors">
            <RadioGroupItem value="upi" id="upi" />
            <Label htmlFor="upi" className="flex items-center gap-2 cursor-pointer flex-1">
              <Smartphone className="w-5 h-5 text-primary" />
              <span>UPI Payment</span>
            </Label>
          </div>
          
          <div className="flex items-center space-x-3 p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors">
            <RadioGroupItem value="netbanking" id="netbanking" />
            <Label htmlFor="netbanking" className="flex items-center gap-2 cursor-pointer flex-1">
              <Banknote className="w-5 h-5 text-primary" />
              <span>Net Banking</span>
            </Label>
          </div>
          
          <div className="flex items-center space-x-3 p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors">
            <RadioGroupItem value="wallet" id="wallet" />
            <Label htmlFor="wallet" className="flex items-center gap-2 cursor-pointer flex-1">
              <Wallet className="w-5 h-5 text-primary" />
              <span>Digital Wallet</span>
            </Label>
          </div>
          
          <div className="flex items-center space-x-3 p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors">
            <RadioGroupItem value="emi" id="emi" />
            <Label htmlFor="emi" className="flex items-center gap-2 cursor-pointer flex-1">
              <Clock className="w-5 h-5 text-primary" />
              <span>EMI (0% Interest)</span>
            </Label>
          </div>
        </RadioGroup>

        {/* Payment Details Based on Selected Method */}
        {formData.paymentMethod === 'card' && (
          <div className="space-y-4 mt-6 p-4 bg-muted/30 rounded-lg">
            <h4 className="font-medium text-foreground">Card Details</h4>
            <div className="space-y-4">
              <div>
                <Label htmlFor="cardNumber">Card Number</Label>
                <Input
                  id="cardNumber"
                  value={formData.cardNumber}
                  onChange={(e) => handleInputChange('cardNumber', formatCardNumber(e.target.value))}
                  placeholder="1234 5678 9012 3456"
                  maxLength={19}
                  required
                  className="mt-1"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="expiryDate">Expiry Date</Label>
                  <Input
                    id="expiryDate"
                    value={formData.expiryDate}
                    onChange={(e) => handleInputChange('expiryDate', formatExpiry(e.target.value))}
                    placeholder="MM/YY"
                    maxLength={5}
                    required
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="cvv">CVV</Label>
                  <Input
                    id="cvv"
                    value={formData.cvv}
                    onChange={(e) => handleInputChange('cvv', e.target.value)}
                    placeholder="123"
                    maxLength={4}
                    required
                    className="mt-1"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="cardholderName">Cardholder Name</Label>
                <Input
                  id="cardholderName"
                  value={formData.cardholderName}
                  onChange={(e) => handleInputChange('cardholderName', e.target.value)}
                  required
                  className="mt-1"
                />
              </div>
            </div>
          </div>
        )}

        {formData.paymentMethod === 'upi' && (
          <div className="space-y-4 mt-6 p-4 bg-muted/30 rounded-lg">
            <h4 className="font-medium text-foreground">UPI Details</h4>
            <div>
              <Label htmlFor="upiId">UPI ID</Label>
              <Input
                id="upiId"
                value={formData.upiId}
                onChange={(e) => handleInputChange('upiId', e.target.value)}
                placeholder="yourname@paytm"
                required
                className="mt-1"
              />
            </div>
          </div>
        )}

        {formData.paymentMethod === 'netbanking' && (
          <div className="space-y-4 mt-6 p-4 bg-muted/30 rounded-lg">
            <h4 className="font-medium text-foreground">Bank Details</h4>
            <div>
              <Label htmlFor="bankName">Select Bank</Label>
              <select
                id="bankName"
                value={formData.bankName}
                onChange={(e) => handleInputChange('bankName', e.target.value)}
                required
                className="mt-1 w-full h-10 px-3 py-2 rounded-md border border-input bg-background text-foreground"
              >
                <option value="">Select your bank</option>
                <option value="sbi">State Bank of India</option>
                <option value="hdfc">HDFC Bank</option>
                <option value="icici">ICICI Bank</option>
                <option value="axis">Axis Bank</option>
                <option value="kotak">Kotak Mahindra Bank</option>
                <option value="pnb">Punjab National Bank</option>
              </select>
            </div>
          </div>
        )}
      </div>

      {/* Total and Submit */}
      <div className="space-y-4 pt-6 border-t border-border">
        <div className="flex justify-between items-center text-2xl font-bold">
          <span>Total Amount:</span>
          <span className="text-primary">{formatPrice(totalAmount)}</span>
        </div>
        
        <Button 
          type="submit" 
          size="lg" 
          className="w-full bg-primary hover:bg-primary/90"
          disabled={isProcessing}
        >
          {isProcessing ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
              Processing Payment...
            </>
          ) : (
            <>
              <CreditCard className="w-5 h-5 mr-2" />
              Complete Payment
            </>
          )}
        </Button>
        
        <p className="text-xs text-foreground/60 text-center">
          Your payment information is secure and encrypted
        </p>
      </div>
    </form>
  );
};

export default CheckoutForm;