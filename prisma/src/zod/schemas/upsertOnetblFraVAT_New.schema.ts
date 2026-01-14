import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblFraVAT_NewSelectObjectSchema as tblFraVAT_NewSelectObjectSchema } from './objects/tblFraVAT_NewSelect.schema';
import { tblFraVAT_NewWhereUniqueInputObjectSchema as tblFraVAT_NewWhereUniqueInputObjectSchema } from './objects/tblFraVAT_NewWhereUniqueInput.schema';
import { tblFraVAT_NewCreateInputObjectSchema as tblFraVAT_NewCreateInputObjectSchema } from './objects/tblFraVAT_NewCreateInput.schema';
import { tblFraVAT_NewUncheckedCreateInputObjectSchema as tblFraVAT_NewUncheckedCreateInputObjectSchema } from './objects/tblFraVAT_NewUncheckedCreateInput.schema';
import { tblFraVAT_NewUpdateInputObjectSchema as tblFraVAT_NewUpdateInputObjectSchema } from './objects/tblFraVAT_NewUpdateInput.schema';
import { tblFraVAT_NewUncheckedUpdateInputObjectSchema as tblFraVAT_NewUncheckedUpdateInputObjectSchema } from './objects/tblFraVAT_NewUncheckedUpdateInput.schema';

export const tblFraVAT_NewUpsertOneSchema: z.ZodType<Prisma.tblFraVAT_NewUpsertArgs> = z.object({ select: tblFraVAT_NewSelectObjectSchema.optional(),  where: tblFraVAT_NewWhereUniqueInputObjectSchema, create: z.union([ tblFraVAT_NewCreateInputObjectSchema, tblFraVAT_NewUncheckedCreateInputObjectSchema ]), update: z.union([ tblFraVAT_NewUpdateInputObjectSchema, tblFraVAT_NewUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.tblFraVAT_NewUpsertArgs>;

export const tblFraVAT_NewUpsertOneZodSchema = z.object({ select: tblFraVAT_NewSelectObjectSchema.optional(),  where: tblFraVAT_NewWhereUniqueInputObjectSchema, create: z.union([ tblFraVAT_NewCreateInputObjectSchema, tblFraVAT_NewUncheckedCreateInputObjectSchema ]), update: z.union([ tblFraVAT_NewUpdateInputObjectSchema, tblFraVAT_NewUncheckedUpdateInputObjectSchema ]) }).strict();