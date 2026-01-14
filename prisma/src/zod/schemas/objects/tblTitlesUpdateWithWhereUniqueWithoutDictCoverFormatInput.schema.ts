import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitlesWhereUniqueInputObjectSchema as tblTitlesWhereUniqueInputObjectSchema } from './tblTitlesWhereUniqueInput.schema';
import { tblTitlesUpdateWithoutDictCoverFormatInputObjectSchema as tblTitlesUpdateWithoutDictCoverFormatInputObjectSchema } from './tblTitlesUpdateWithoutDictCoverFormatInput.schema';
import { tblTitlesUncheckedUpdateWithoutDictCoverFormatInputObjectSchema as tblTitlesUncheckedUpdateWithoutDictCoverFormatInputObjectSchema } from './tblTitlesUncheckedUpdateWithoutDictCoverFormatInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblTitlesWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => tblTitlesUpdateWithoutDictCoverFormatInputObjectSchema), z.lazy(() => tblTitlesUncheckedUpdateWithoutDictCoverFormatInputObjectSchema)])
}).strict();
export const tblTitlesUpdateWithWhereUniqueWithoutDictCoverFormatInputObjectSchema: z.ZodType<Prisma.tblTitlesUpdateWithWhereUniqueWithoutDictCoverFormatInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitlesUpdateWithWhereUniqueWithoutDictCoverFormatInput>;
export const tblTitlesUpdateWithWhereUniqueWithoutDictCoverFormatInputObjectZodSchema = makeSchema();
