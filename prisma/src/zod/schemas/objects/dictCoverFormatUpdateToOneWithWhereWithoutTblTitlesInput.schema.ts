import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictCoverFormatWhereInputObjectSchema as dictCoverFormatWhereInputObjectSchema } from './dictCoverFormatWhereInput.schema';
import { dictCoverFormatUpdateWithoutTblTitlesInputObjectSchema as dictCoverFormatUpdateWithoutTblTitlesInputObjectSchema } from './dictCoverFormatUpdateWithoutTblTitlesInput.schema';
import { dictCoverFormatUncheckedUpdateWithoutTblTitlesInputObjectSchema as dictCoverFormatUncheckedUpdateWithoutTblTitlesInputObjectSchema } from './dictCoverFormatUncheckedUpdateWithoutTblTitlesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => dictCoverFormatWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => dictCoverFormatUpdateWithoutTblTitlesInputObjectSchema), z.lazy(() => dictCoverFormatUncheckedUpdateWithoutTblTitlesInputObjectSchema)])
}).strict();
export const dictCoverFormatUpdateToOneWithWhereWithoutTblTitlesInputObjectSchema: z.ZodType<Prisma.dictCoverFormatUpdateToOneWithWhereWithoutTblTitlesInput> = makeSchema() as unknown as z.ZodType<Prisma.dictCoverFormatUpdateToOneWithWhereWithoutTblTitlesInput>;
export const dictCoverFormatUpdateToOneWithWhereWithoutTblTitlesInputObjectZodSchema = makeSchema();
