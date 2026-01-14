import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblUserAccessSelectObjectSchema as tblUserAccessSelectObjectSchema } from './objects/tblUserAccessSelect.schema';
import { tblUserAccessIncludeObjectSchema as tblUserAccessIncludeObjectSchema } from './objects/tblUserAccessInclude.schema';
import { tblUserAccessCreateInputObjectSchema as tblUserAccessCreateInputObjectSchema } from './objects/tblUserAccessCreateInput.schema';
import { tblUserAccessUncheckedCreateInputObjectSchema as tblUserAccessUncheckedCreateInputObjectSchema } from './objects/tblUserAccessUncheckedCreateInput.schema';

export const tblUserAccessCreateOneSchema: z.ZodType<Prisma.tblUserAccessCreateArgs> = z.object({ select: tblUserAccessSelectObjectSchema.optional(), include: tblUserAccessIncludeObjectSchema.optional(), data: z.union([tblUserAccessCreateInputObjectSchema, tblUserAccessUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.tblUserAccessCreateArgs>;

export const tblUserAccessCreateOneZodSchema = z.object({ select: tblUserAccessSelectObjectSchema.optional(), include: tblUserAccessIncludeObjectSchema.optional(), data: z.union([tblUserAccessCreateInputObjectSchema, tblUserAccessUncheckedCreateInputObjectSchema]) }).strict();