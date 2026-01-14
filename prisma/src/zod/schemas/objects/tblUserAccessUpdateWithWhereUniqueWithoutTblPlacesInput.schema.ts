import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblUserAccessWhereUniqueInputObjectSchema as tblUserAccessWhereUniqueInputObjectSchema } from './tblUserAccessWhereUniqueInput.schema';
import { tblUserAccessUpdateWithoutTblPlacesInputObjectSchema as tblUserAccessUpdateWithoutTblPlacesInputObjectSchema } from './tblUserAccessUpdateWithoutTblPlacesInput.schema';
import { tblUserAccessUncheckedUpdateWithoutTblPlacesInputObjectSchema as tblUserAccessUncheckedUpdateWithoutTblPlacesInputObjectSchema } from './tblUserAccessUncheckedUpdateWithoutTblPlacesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblUserAccessWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => tblUserAccessUpdateWithoutTblPlacesInputObjectSchema), z.lazy(() => tblUserAccessUncheckedUpdateWithoutTblPlacesInputObjectSchema)])
}).strict();
export const tblUserAccessUpdateWithWhereUniqueWithoutTblPlacesInputObjectSchema: z.ZodType<Prisma.tblUserAccessUpdateWithWhereUniqueWithoutTblPlacesInput> = makeSchema() as unknown as z.ZodType<Prisma.tblUserAccessUpdateWithWhereUniqueWithoutTblPlacesInput>;
export const tblUserAccessUpdateWithWhereUniqueWithoutTblPlacesInputObjectZodSchema = makeSchema();
