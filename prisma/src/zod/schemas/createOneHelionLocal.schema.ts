import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { HelionLocalSelectObjectSchema as HelionLocalSelectObjectSchema } from './objects/HelionLocalSelect.schema';
import { HelionLocalCreateInputObjectSchema as HelionLocalCreateInputObjectSchema } from './objects/HelionLocalCreateInput.schema';
import { HelionLocalUncheckedCreateInputObjectSchema as HelionLocalUncheckedCreateInputObjectSchema } from './objects/HelionLocalUncheckedCreateInput.schema';

export const HelionLocalCreateOneSchema: z.ZodType<Prisma.HelionLocalCreateArgs> = z.object({ select: HelionLocalSelectObjectSchema.optional(),  data: z.union([HelionLocalCreateInputObjectSchema, HelionLocalUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.HelionLocalCreateArgs>;

export const HelionLocalCreateOneZodSchema = z.object({ select: HelionLocalSelectObjectSchema.optional(),  data: z.union([HelionLocalCreateInputObjectSchema, HelionLocalUncheckedCreateInputObjectSchema]) }).strict();