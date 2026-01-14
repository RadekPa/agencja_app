import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblUserAccessWhereUniqueInputObjectSchema as tblUserAccessWhereUniqueInputObjectSchema } from './tblUserAccessWhereUniqueInput.schema';
import { tblUserAccessUpdateWithoutTblPlacesInputObjectSchema as tblUserAccessUpdateWithoutTblPlacesInputObjectSchema } from './tblUserAccessUpdateWithoutTblPlacesInput.schema';
import { tblUserAccessUncheckedUpdateWithoutTblPlacesInputObjectSchema as tblUserAccessUncheckedUpdateWithoutTblPlacesInputObjectSchema } from './tblUserAccessUncheckedUpdateWithoutTblPlacesInput.schema';
import { tblUserAccessCreateWithoutTblPlacesInputObjectSchema as tblUserAccessCreateWithoutTblPlacesInputObjectSchema } from './tblUserAccessCreateWithoutTblPlacesInput.schema';
import { tblUserAccessUncheckedCreateWithoutTblPlacesInputObjectSchema as tblUserAccessUncheckedCreateWithoutTblPlacesInputObjectSchema } from './tblUserAccessUncheckedCreateWithoutTblPlacesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblUserAccessWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => tblUserAccessUpdateWithoutTblPlacesInputObjectSchema), z.lazy(() => tblUserAccessUncheckedUpdateWithoutTblPlacesInputObjectSchema)]),
  create: z.union([z.lazy(() => tblUserAccessCreateWithoutTblPlacesInputObjectSchema), z.lazy(() => tblUserAccessUncheckedCreateWithoutTblPlacesInputObjectSchema)])
}).strict();
export const tblUserAccessUpsertWithWhereUniqueWithoutTblPlacesInputObjectSchema: z.ZodType<Prisma.tblUserAccessUpsertWithWhereUniqueWithoutTblPlacesInput> = makeSchema() as unknown as z.ZodType<Prisma.tblUserAccessUpsertWithWhereUniqueWithoutTblPlacesInput>;
export const tblUserAccessUpsertWithWhereUniqueWithoutTblPlacesInputObjectZodSchema = makeSchema();
