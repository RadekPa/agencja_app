import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitlesWhereUniqueInputObjectSchema as tblTitlesWhereUniqueInputObjectSchema } from './tblTitlesWhereUniqueInput.schema';
import { tblTitlesUpdateWithoutDictTitMainClassInputObjectSchema as tblTitlesUpdateWithoutDictTitMainClassInputObjectSchema } from './tblTitlesUpdateWithoutDictTitMainClassInput.schema';
import { tblTitlesUncheckedUpdateWithoutDictTitMainClassInputObjectSchema as tblTitlesUncheckedUpdateWithoutDictTitMainClassInputObjectSchema } from './tblTitlesUncheckedUpdateWithoutDictTitMainClassInput.schema';
import { tblTitlesCreateWithoutDictTitMainClassInputObjectSchema as tblTitlesCreateWithoutDictTitMainClassInputObjectSchema } from './tblTitlesCreateWithoutDictTitMainClassInput.schema';
import { tblTitlesUncheckedCreateWithoutDictTitMainClassInputObjectSchema as tblTitlesUncheckedCreateWithoutDictTitMainClassInputObjectSchema } from './tblTitlesUncheckedCreateWithoutDictTitMainClassInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblTitlesWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => tblTitlesUpdateWithoutDictTitMainClassInputObjectSchema), z.lazy(() => tblTitlesUncheckedUpdateWithoutDictTitMainClassInputObjectSchema)]),
  create: z.union([z.lazy(() => tblTitlesCreateWithoutDictTitMainClassInputObjectSchema), z.lazy(() => tblTitlesUncheckedCreateWithoutDictTitMainClassInputObjectSchema)])
}).strict();
export const tblTitlesUpsertWithWhereUniqueWithoutDictTitMainClassInputObjectSchema: z.ZodType<Prisma.tblTitlesUpsertWithWhereUniqueWithoutDictTitMainClassInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitlesUpsertWithWhereUniqueWithoutDictTitMainClassInput>;
export const tblTitlesUpsertWithWhereUniqueWithoutDictTitMainClassInputObjectZodSchema = makeSchema();
