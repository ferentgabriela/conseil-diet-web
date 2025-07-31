-- Fix OTP expiry to meet security recommendations (1 hour instead of default 24 hours)
UPDATE auth.config SET value = '3600' WHERE parameter = 'OTP_EXPIRY';