import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblPersonSelectObjectSchema as tblPersonSelectObjectSchema } from './objects/tblPersonSelect.schema';
import { tblPersonWhereUniqueInputObjectSchema as tblPersonWhereUniqueInputObjectSchema } from './objects/tblPersonWhereUniqueInput.schema';

export const tblPersonDeleteOneSchema: z.ZodType<Prisma.tblPersonDeleteArgs> = z.object({ select: tblPersonSelectObjectSchema.optional(),  where: tblPersonWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.tblPersonDeleteArgs>;

export const tblPersonDeleteOneZodSchema = z.object({ select: tblPersonSelectObjectSchema.optional(),  where: tblPersonWhereUniqueInputObjectSchema }).strict();