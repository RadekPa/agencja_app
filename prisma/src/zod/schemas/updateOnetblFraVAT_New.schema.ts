import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblFraVAT_NewSelectObjectSchema as tblFraVAT_NewSelectObjectSchema } from './objects/tblFraVAT_NewSelect.schema';
import { tblFraVAT_NewUpdateInputObjectSchema as tblFraVAT_NewUpdateInputObjectSchema } from './objects/tblFraVAT_NewUpdateInput.schema';
import { tblFraVAT_NewUncheckedUpdateInputObjectSchema as tblFraVAT_NewUncheckedUpdateInputObjectSchema } from './objects/tblFraVAT_NewUncheckedUpdateInput.schema';
import { tblFraVAT_NewWhereUniqueInputObjectSchema as tblFraVAT_NewWhereUniqueInputObjectSchema } from './objects/tblFraVAT_NewWhereUniqueInput.schema';

export const tblFraVAT_NewUpdateOneSchema: z.ZodType<Prisma.tblFraVAT_NewUpdateArgs> = z.object({ select: tblFraVAT_NewSelectObjectSchema.optional(),  data: z.union([tblFraVAT_NewUpdateInputObjectSchema, tblFraVAT_NewUncheckedUpdateInputObjectSchema]), where: tblFraVAT_NewWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.tblFraVAT_NewUpdateArgs>;

export const tblFraVAT_NewUpdateOneZodSchema = z.object({ select: tblFraVAT_NewSelectObjectSchema.optional(),  data: z.union([tblFraVAT_NewUpdateInputObjectSchema, tblFraVAT_NewUncheckedUpdateInputObjectSchema]), where: tblFraVAT_NewWhereUniqueInputObjectSchema }).strict();