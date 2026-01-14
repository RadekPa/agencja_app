import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblAgreementsSelectObjectSchema as tblAgreementsSelectObjectSchema } from './objects/tblAgreementsSelect.schema';
import { tblAgreementsIncludeObjectSchema as tblAgreementsIncludeObjectSchema } from './objects/tblAgreementsInclude.schema';
import { tblAgreementsWhereUniqueInputObjectSchema as tblAgreementsWhereUniqueInputObjectSchema } from './objects/tblAgreementsWhereUniqueInput.schema';
import { tblAgreementsCreateInputObjectSchema as tblAgreementsCreateInputObjectSchema } from './objects/tblAgreementsCreateInput.schema';
import { tblAgreementsUncheckedCreateInputObjectSchema as tblAgreementsUncheckedCreateInputObjectSchema } from './objects/tblAgreementsUncheckedCreateInput.schema';
import { tblAgreementsUpdateInputObjectSchema as tblAgreementsUpdateInputObjectSchema } from './objects/tblAgreementsUpdateInput.schema';
import { tblAgreementsUncheckedUpdateInputObjectSchema as tblAgreementsUncheckedUpdateInputObjectSchema } from './objects/tblAgreementsUncheckedUpdateInput.schema';

export const tblAgreementsUpsertOneSchema: z.ZodType<Prisma.tblAgreementsUpsertArgs> = z.object({ select: tblAgreementsSelectObjectSchema.optional(), include: tblAgreementsIncludeObjectSchema.optional(), where: tblAgreementsWhereUniqueInputObjectSchema, create: z.union([ tblAgreementsCreateInputObjectSchema, tblAgreementsUncheckedCreateInputObjectSchema ]), update: z.union([ tblAgreementsUpdateInputObjectSchema, tblAgreementsUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.tblAgreementsUpsertArgs>;

export const tblAgreementsUpsertOneZodSchema = z.object({ select: tblAgreementsSelectObjectSchema.optional(), include: tblAgreementsIncludeObjectSchema.optional(), where: tblAgreementsWhereUniqueInputObjectSchema, create: z.union([ tblAgreementsCreateInputObjectSchema, tblAgreementsUncheckedCreateInputObjectSchema ]), update: z.union([ tblAgreementsUpdateInputObjectSchema, tblAgreementsUncheckedUpdateInputObjectSchema ]) }).strict();