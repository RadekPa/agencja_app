import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitAuthorsWhereUniqueInputObjectSchema as tblTitAuthorsWhereUniqueInputObjectSchema } from './tblTitAuthorsWhereUniqueInput.schema';
import { tblTitAuthorsUpdateWithoutTblTitlesInputObjectSchema as tblTitAuthorsUpdateWithoutTblTitlesInputObjectSchema } from './tblTitAuthorsUpdateWithoutTblTitlesInput.schema';
import { tblTitAuthorsUncheckedUpdateWithoutTblTitlesInputObjectSchema as tblTitAuthorsUncheckedUpdateWithoutTblTitlesInputObjectSchema } from './tblTitAuthorsUncheckedUpdateWithoutTblTitlesInput.schema';
import { tblTitAuthorsCreateWithoutTblTitlesInputObjectSchema as tblTitAuthorsCreateWithoutTblTitlesInputObjectSchema } from './tblTitAuthorsCreateWithoutTblTitlesInput.schema';
import { tblTitAuthorsUncheckedCreateWithoutTblTitlesInputObjectSchema as tblTitAuthorsUncheckedCreateWithoutTblTitlesInputObjectSchema } from './tblTitAuthorsUncheckedCreateWithoutTblTitlesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblTitAuthorsWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => tblTitAuthorsUpdateWithoutTblTitlesInputObjectSchema), z.lazy(() => tblTitAuthorsUncheckedUpdateWithoutTblTitlesInputObjectSchema)]),
  create: z.union([z.lazy(() => tblTitAuthorsCreateWithoutTblTitlesInputObjectSchema), z.lazy(() => tblTitAuthorsUncheckedCreateWithoutTblTitlesInputObjectSchema)])
}).strict();
export const tblTitAuthorsUpsertWithWhereUniqueWithoutTblTitlesInputObjectSchema: z.ZodType<Prisma.tblTitAuthorsUpsertWithWhereUniqueWithoutTblTitlesInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitAuthorsUpsertWithWhereUniqueWithoutTblTitlesInput>;
export const tblTitAuthorsUpsertWithWhereUniqueWithoutTblTitlesInputObjectZodSchema = makeSchema();
