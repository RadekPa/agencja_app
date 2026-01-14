import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblFraVAT_NewSelectObjectSchema as tblFraVAT_NewSelectObjectSchema } from './objects/tblFraVAT_NewSelect.schema';
import { tblFraVAT_NewCreateInputObjectSchema as tblFraVAT_NewCreateInputObjectSchema } from './objects/tblFraVAT_NewCreateInput.schema';
import { tblFraVAT_NewUncheckedCreateInputObjectSchema as tblFraVAT_NewUncheckedCreateInputObjectSchema } from './objects/tblFraVAT_NewUncheckedCreateInput.schema';

export const tblFraVAT_NewCreateOneSchema: z.ZodType<Prisma.tblFraVAT_NewCreateArgs> = z.object({ select: tblFraVAT_NewSelectObjectSchema.optional(),  data: z.union([tblFraVAT_NewCreateInputObjectSchema, tblFraVAT_NewUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.tblFraVAT_NewCreateArgs>;

export const tblFraVAT_NewCreateOneZodSchema = z.object({ select: tblFraVAT_NewSelectObjectSchema.optional(),  data: z.union([tblFraVAT_NewCreateInputObjectSchema, tblFraVAT_NewUncheckedCreateInputObjectSchema]) }).strict();