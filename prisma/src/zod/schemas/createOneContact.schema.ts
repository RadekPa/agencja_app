import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ContactSelectObjectSchema as ContactSelectObjectSchema } from './objects/ContactSelect.schema';
import { ContactCreateInputObjectSchema as ContactCreateInputObjectSchema } from './objects/ContactCreateInput.schema';
import { ContactUncheckedCreateInputObjectSchema as ContactUncheckedCreateInputObjectSchema } from './objects/ContactUncheckedCreateInput.schema';

export const ContactCreateOneSchema: z.ZodType<Prisma.ContactCreateArgs> = z.object({ select: ContactSelectObjectSchema.optional(),  data: z.union([ContactCreateInputObjectSchema, ContactUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.ContactCreateArgs>;

export const ContactCreateOneZodSchema = z.object({ select: ContactSelectObjectSchema.optional(),  data: z.union([ContactCreateInputObjectSchema, ContactUncheckedCreateInputObjectSchema]) }).strict();