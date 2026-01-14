import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblTitSubClassSelectObjectSchema as tblTitSubClassSelectObjectSchema } from './objects/tblTitSubClassSelect.schema';
import { tblTitSubClassIncludeObjectSchema as tblTitSubClassIncludeObjectSchema } from './objects/tblTitSubClassInclude.schema';
import { tblTitSubClassCreateInputObjectSchema as tblTitSubClassCreateInputObjectSchema } from './objects/tblTitSubClassCreateInput.schema';
import { tblTitSubClassUncheckedCreateInputObjectSchema as tblTitSubClassUncheckedCreateInputObjectSchema } from './objects/tblTitSubClassUncheckedCreateInput.schema';

export const tblTitSubClassCreateOneSchema: z.ZodType<Prisma.tblTitSubClassCreateArgs> = z.object({ select: tblTitSubClassSelectObjectSchema.optional(), include: tblTitSubClassIncludeObjectSchema.optional(), data: z.union([tblTitSubClassCreateInputObjectSchema, tblTitSubClassUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.tblTitSubClassCreateArgs>;

export const tblTitSubClassCreateOneZodSchema = z.object({ select: tblTitSubClassSelectObjectSchema.optional(), include: tblTitSubClassIncludeObjectSchema.optional(), data: z.union([tblTitSubClassCreateInputObjectSchema, tblTitSubClassUncheckedCreateInputObjectSchema]) }).strict();