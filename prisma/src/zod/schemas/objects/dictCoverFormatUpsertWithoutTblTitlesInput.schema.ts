import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictCoverFormatUpdateWithoutTblTitlesInputObjectSchema as dictCoverFormatUpdateWithoutTblTitlesInputObjectSchema } from './dictCoverFormatUpdateWithoutTblTitlesInput.schema';
import { dictCoverFormatUncheckedUpdateWithoutTblTitlesInputObjectSchema as dictCoverFormatUncheckedUpdateWithoutTblTitlesInputObjectSchema } from './dictCoverFormatUncheckedUpdateWithoutTblTitlesInput.schema';
import { dictCoverFormatCreateWithoutTblTitlesInputObjectSchema as dictCoverFormatCreateWithoutTblTitlesInputObjectSchema } from './dictCoverFormatCreateWithoutTblTitlesInput.schema';
import { dictCoverFormatUncheckedCreateWithoutTblTitlesInputObjectSchema as dictCoverFormatUncheckedCreateWithoutTblTitlesInputObjectSchema } from './dictCoverFormatUncheckedCreateWithoutTblTitlesInput.schema';
import { dictCoverFormatWhereInputObjectSchema as dictCoverFormatWhereInputObjectSchema } from './dictCoverFormatWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => dictCoverFormatUpdateWithoutTblTitlesInputObjectSchema), z.lazy(() => dictCoverFormatUncheckedUpdateWithoutTblTitlesInputObjectSchema)]),
  create: z.union([z.lazy(() => dictCoverFormatCreateWithoutTblTitlesInputObjectSchema), z.lazy(() => dictCoverFormatUncheckedCreateWithoutTblTitlesInputObjectSchema)]),
  where: z.lazy(() => dictCoverFormatWhereInputObjectSchema).optional()
}).strict();
export const dictCoverFormatUpsertWithoutTblTitlesInputObjectSchema: z.ZodType<Prisma.dictCoverFormatUpsertWithoutTblTitlesInput> = makeSchema() as unknown as z.ZodType<Prisma.dictCoverFormatUpsertWithoutTblTitlesInput>;
export const dictCoverFormatUpsertWithoutTblTitlesInputObjectZodSchema = makeSchema();
