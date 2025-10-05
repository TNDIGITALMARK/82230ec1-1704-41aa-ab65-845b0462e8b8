"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from '@/components/ui/alert-dialog';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Loader2, AlertTriangle, CheckCircle } from 'lucide-react';

interface AccountCancellationProps {
  userId: string;
  onCancellationComplete?: () => void;
}

interface CancellationFormData {
  reason: string;
  confirmationEmail: string;
}

export function AccountCancellation({ userId, onCancellationComplete }: AccountCancellationProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [cancellationComplete, setCancellationComplete] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState<CancellationFormData>({
    reason: '',
    confirmationEmail: 'management@yahoo.com'
  });

  const handleCancelAccount = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/account/cancel', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId,
          reason: formData.reason,
          confirmationEmail: formData.confirmationEmail
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Failed to cancel account');
      }

      setCancellationComplete(true);
      onCancellationComplete?.();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  if (cancellationComplete) {
    return (
      <Dialog open={true} onOpenChange={() => {}}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <div className="flex items-center gap-3 mb-2">
              <CheckCircle className="h-6 w-6 text-green-600" />
              <DialogTitle>Account Cancelled Successfully</DialogTitle>
            </div>
            <DialogDescription>
              Your account has been cancelled and a confirmation email has been sent to management@yahoo.com.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button onClick={() => window.location.href = '/'}>
              Return to Homepage
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-bold text-gray-900">Cancel Account</h1>
        <p className="text-gray-600">
          We're sorry to see you go. Please provide the details below to cancel your account.
        </p>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <div className="flex items-start gap-3">
          <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
          <div>
            <h3 className="font-medium text-yellow-800">Before you cancel</h3>
            <p className="text-sm text-yellow-700 mt-1">
              Account cancellation is permanent. All your data will be deleted and cannot be recovered.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <Label htmlFor="reason">Reason for cancellation (optional)</Label>
          <Textarea
            id="reason"
            placeholder="Help us improve by telling us why you're leaving..."
            value={formData.reason}
            onChange={(e) => setFormData(prev => ({ ...prev, reason: e.target.value }))}
            className="mt-1"
            rows={3}
          />
        </div>

        <div>
          <Label htmlFor="confirmationEmail">Confirmation email address</Label>
          <Input
            id="confirmationEmail"
            type="email"
            value={formData.confirmationEmail}
            onChange={(e) => setFormData(prev => ({ ...prev, confirmationEmail: e.target.value }))}
            className="mt-1"
            placeholder="management@yahoo.com"
          />
          <p className="text-sm text-gray-500 mt-1">
            A confirmation email will be sent to this address.
          </p>
        </div>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-red-600" />
            <p className="text-red-800">{error}</p>
          </div>
        </div>
      )}

      <div className="flex gap-3 pt-4">
        <Button
          variant="outline"
          onClick={() => window.history.back()}
          className="flex-1"
        >
          Cancel
        </Button>

        <AlertDialog open={showConfirmation} onOpenChange={setShowConfirmation}>
          <AlertDialogTrigger asChild>
            <Button
              variant="destructive"
              className="flex-1"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin mr-2" />
                  Cancelling...
                </>
              ) : (
                'Cancel Account'
              )}
            </Button>
          </AlertDialogTrigger>

          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your account and all associated data.
                A confirmation email will be sent to {formData.confirmationEmail}.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>No, keep my account</AlertDialogCancel>
              <AlertDialogAction
                onClick={handleCancelAccount}
                className="bg-red-600 hover:bg-red-700"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin mr-2" />
                    Cancelling...
                  </>
                ) : (
                  'Yes, cancel my account'
                )}
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
}